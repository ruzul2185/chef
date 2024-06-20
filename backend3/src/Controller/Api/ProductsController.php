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
        $this->Authentication->allowUnauthenticated(['getProductLists']);

    }
//api url : http://localhost:8765/api/Items/getProducts

    public function getProductLists(){
        
        $this->loadModel("Products");
        $data = $this->Products->find('all')->contain([
            'Images' => function ($q) {
                return $q->where(['image_type_id' => 1]);
            }
        ]);
        // $data = $this->Products->find('all');
        // $Image = $this->Products->get($id, [
        //     'contain' => ['Images'],
        // ]);
        // $data = $this->Images->select()
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);

    }

    public function getProductDetail($id = null){
        $this->loadModel('Products');
        $data = $this->Products->find('all')->where(['id'=>$id]);

    }
}
