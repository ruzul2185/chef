<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ImagesController extends AppController
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
        $this->Authentication->allowUnauthenticated(['getImages']);

    }
//api url : http://localhost:8765/api//Items/getImages

    public function getImages(){
        $this->loadModel("Images");
        $data = $this->Images->find('all');
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);
    }
}
