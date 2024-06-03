<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ItemsController extends AppController
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

        $this->Authentication->allowUnauthenticated(['token']);

    }

    // To fetch data - http://localhost:8765/api//Items/getItems
    public function getItems()
    {

        $this->loadModel("Items");
        $data = $this->Items->find('all');
        $this->set([
                       'data' => $data,
                       '_serialize' => ['data']
                   ]);
    }


}
