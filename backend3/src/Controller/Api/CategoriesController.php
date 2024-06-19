<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class CategoriesController extends AppController
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
        $this->Authentication->allowUnauthenticated(['getCategories']);

    }
//api url : http://localhost:8765/api//Items/getCategories

    public function getCategories(){
        $this->loadModel("Categories");
        $data = $this->Categories->find('all');
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);
    }
}
