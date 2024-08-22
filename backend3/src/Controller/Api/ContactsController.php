<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ContactsController extends AppController
{
    public $paginate = [
        'page' => 1,
        'limit' => 5,
        'maxLimit' => 15,
        'sortWhitelist' => [
            'id', 'name'
        ]
    ];

    public function initialize(): void
    {
        parent::initialize();

        $this->Authentication->allowUnauthenticated(['contact','getLatestProducts']);

    }

    public function contact()
    {
        if ($this->request->is('post')) {
            $contact = $this->Contacts->newEmptyEntity();
            $contact = $this->Contacts->patchEntity($contact, $this->request->getData());

            if ($this->Contacts->save($contact)) {
                $response = [
                    'status' => 'success',
                    'message' => 'Contact saved successfully!',
                    'data' => $contact
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Failed to save contact.',
                    'errors' => $contact->getErrors()
                ];
            }

            $this->set([
                'response' => $response,
                '_serialize' => ['response']
            ]);
        } else {
            $this->set([
                'response' => ['status' => 'error', 'message' => 'Invalid request method.'],
                '_serialize' => ['response']
            ]);
        }
    }
    public function getLatestProducts()
    {
        if ($this->request->is('get')) {
            $this->loadModel("Products");

            // Fetch the latest 9 products that have images of type 1
            $data = $this->Products->find('all')
                ->matching('Images', function ($q) {
                    return $q->where(['image_type_id' => 1]);
                })
                ->order(['Products.created' => 'DESC']) // Order by creation date descending
                ->limit(9) // Limit the results to 9
                ->all();

            foreach($data as $item){
                // Initialize the url property
                $item->url = $item->_matchingData['Images']->url;
            }

            // Set the data to be returned as JSON
            $this->set([
                'data' => $data,
                '_serialize' => ['data']
            ]);
        }
    }
}
