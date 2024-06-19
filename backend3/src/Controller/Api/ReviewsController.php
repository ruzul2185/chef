<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ReviewsController extends AppController
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
        $this->Authentication->allowUnauthenticated(['getReviews']);

    }
//api url : http://localhost:8765/api/Items/getReviews

    public function getReviews(){
        $this->loadModel("Reviews");
        $data = $this->Reviews->find('all');
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);
    }
}
