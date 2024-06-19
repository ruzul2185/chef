<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ProductsController extends AppController
{
    public $paginate = [
        'page' => 1,2,
        'limit' => 10,
        'maxLimit' => 10,
        'sortWhitelist' => [
            'id', 'name'


        ]
    ];

    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->allowUnauthenticated(['getProducts']);

    }
//api url : http://localhost:8765/api/Items/getProducts

    public function getProducts(){
        $this->loadModel("Products");
        $data = $this->Products->find('all');
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);
    }
}
