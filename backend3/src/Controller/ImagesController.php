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
            'contain' => ['Products', 'Reviews'],
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
            'contain' => ['Products', 'Reviews'],
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
    if ($this->request->is('post')) {
        $image1 = $this->Images->patchEntity($image, $this->request->getData());

        // Ensure no errors in the patched entity
        if (!$image1->getErrors()) {
            // Ensure 'image' data is available and valid
            $imageFile = $this->request->getData('image');

            if ($imageFile && $imageFile->getClientFilename()) {
                $name = $imageFile->getClientFilename();
                $targetPath = WWW_ROOT . 'img' . DS . $name;

                try {
                    // Attempt to move the uploaded file
                    $imageFile->moveTo($targetPath);

                    $image1->name = $name;
                    $uploadFile = 'img/' . $name;
                    $image1->url = Router::fullBaseUrl() . '/' . $uploadFile;

                    if ($this->Images->save($image1)) {
                        $this->Flash->success(__('The image has been saved.'));
                        return $this->redirect(['action' => 'index']);
                    } else {
                        $this->Flash->error(__('The image could not be saved. Please, try again.'));
                    }
                } catch (\Exception $e) {
                    $this->Flash->error(__('Error uploading the image: ' . $e->getMessage()));
                }
            } else {
                $this->Flash->error(__('Image data is missing or invalid.'));
            }
        } else {
            $this->Flash->error(__('Validation errors occurred.'));
        }
    }

    $this->set(compact('image'));
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
        $this->set(compact('image', 'products', 'reviews'));
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
