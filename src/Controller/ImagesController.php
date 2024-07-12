<?php
declare(strict_types=1);

namespace App\Controller;
use Cake\Routing\Router;
/**
 * Images Controller
 *
 * @property \App\Model\Table\ImagesTable $Images
 * @method \App\Model\Entity\Image[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ImagesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Products', 'Reviews', 'ImageTypes'],
        ];
        $images = $this->paginate($this->Images);

        $this->set(compact('images'));
    }

    /**
     * View method
     *
     * @param string|null $id Image id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $image = $this->Images->get($id, [
            'contain' => ['Products', 'Reviews', 'ImageTypes'],
        ]);

        $this->set(compact('image'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $image = $this->Images->newEmptyEntity();
        $this->loadModel('Products');
        $this->loadModel('ImageTypes');
        $this->loadModel('Reviews');
        if ($this->request->is('post')) {
            $imageEntities = [];
            $errors = [];
            $images = $this->request->getData('image');

            if (!empty($images)) {
                foreach ($images as $imageFile) {
                    if ($imageFile && $imageFile->getClientFilename()) {
                        $name = $imageFile->getClientFilename();
                        $targetPath = WWW_ROOT . 'img' . DS . $name;

                        $image1 = $this->Images->newEmptyEntity();
                        $image1 = $this->Images->patchEntity($image1, $this->request->getData());

                        if (!$image1->getErrors()) {
                            try {
                                $imageFile->moveTo($targetPath);

                                $image1->name = $name;
                                $uploadFile = 'img/' . $name;
                                $image1->url = Router::fullBaseUrl() . '/' . $uploadFile;

                                $imageEntities[] = $image1;
                            } catch (\Exception $e) {
                                $errors[] = 'Error uploading the image ' . $name . ': ' . $e->getMessage();
                            }
                        } else {
                            $errors[] = 'Validation errors occurred for image ' . $name;
                        }
                    } else {
                        $errors[] = 'Image data is missing or invalid for one of the files.';
                    }
                }

                if (empty($errors) && $this->Images->saveMany($imageEntities)) {
                    $this->Flash->success(__('The images have been saved.'));
                return $this->redirect(['action' => 'index']);
                } else {
                    $this->Flash->error(__('The images could not be saved. Please, try again.'));
                    if (!empty($errors)) {
                        foreach ($errors as $error) {
                            $this->Flash->error($error);
                        }
                    }
                }
            } else {
                $this->Flash->error(__('No images were uploaded.'));
            }
        }
        $products = $this->Images->Products->find('list', ['keyField' => 'id', 'valueField' => 'name'])->toArray();
        $imageTypes = $this->Images->ImageTypes->find('list', ['keyField' => 'id', 'valueField' => 'name'])->toArray();
        $reviews = $this->Images->Reviews->find('list', ['keyField' => 'id', 'valueField' => 'name'])->toArray();
        $this->set(compact('image','products','imageTypes','reviews'));
    }




    /**
     * Edit method
     *
     * @param string|null $id Image id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $image = $this->Images->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $image = $this->Images->patchEntity($image, $this->request->getData());
            if ($this->Images->save($image)) {
                $this->Flash->success(__('The image has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The image could not be saved. Please, try again.'));
        }
        $products = $this->Images->Products->find('list', ['limit' => 200]);
        $reviews = $this->Images->Reviews->find('list', ['limit' => 200]);
        $imageTypes = $this->Images->ImageTypes->find('list', ['limit' => 200]);
        $this->set(compact('image', 'products', 'reviews', 'imageTypes'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Image id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $image = $this->Images->get($id);
        if ($this->Images->delete($image)) {
            $this->Flash->success(__('The image has been deleted.'));
        } else {
            $this->Flash->error(__('The image could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
