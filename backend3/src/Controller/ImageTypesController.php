<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * ImageTypes Controller
 *
 * @method \App\Model\Entity\ImageType[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ImageTypesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $imageTypes = $this->paginate($this->ImageTypes);

        $this->set(compact('imageTypes'));
    }

    /**
     * View method
     *
     * @param string|null $id Image Type id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $imageType = $this->ImageTypes->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('imageType'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $imageType = $this->ImageTypes->newEmptyEntity();
        if ($this->request->is('post')) {
            $imageType = $this->ImageTypes->patchEntity($imageType, $this->request->getData());
            if ($this->ImageTypes->save($imageType)) {
                $this->Flash->success(__('The image type has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The image type could not be saved. Please, try again.'));
        }
        $this->set(compact('imageType'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Image Type id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $imageType = $this->ImageTypes->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $imageType = $this->ImageTypes->patchEntity($imageType, $this->request->getData());
            if ($this->ImageTypes->save($imageType)) {
                $this->Flash->success(__('The image type has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The image type could not be saved. Please, try again.'));
        }
        $this->set(compact('imageType'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Image Type id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $imageType = $this->ImageTypes->get($id);
        if ($this->ImageTypes->delete($imageType)) {
            $this->Flash->success(__('The image type has been deleted.'));
        } else {
            $this->Flash->error(__('The image type could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
