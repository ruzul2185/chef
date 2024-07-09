<?php

namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Firebase\JWT\JWT;

class ProductsController extends AppController
{
    public $paginate = [
        'page' => 1, 2,
        'limit' => 10,
        'maxLimit' => 10,
        'sortWhitelist' => [
            'id', 'name'


        ]
    ];

    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->allowUnauthenticated(['getProductLists', 'getProductDetail','getLatestProducts']);
    }
    //api url : http://localhost:8765/api/Items/getProducts

    public function getProductLists()
    {
        if ($this->request->is('post')) {
            $receivedData = $this->request->getData();
            $categoryName = $receivedData['Category'];
            $query = $receivedData['query'];
            $this->loadModel('Categories');
            if ($categoryName == 'search') {
                $category = $this->Products->find()
                    ->where(['name LIKE' => '%' . $query . '%'])
                    ->first();
                    // debug($category);
            }
            else {
            $category = $this->Categories->find()
                ->where(['name' => $categoryName])
                ->first();
            }
            $categoryId = $category->id;

            $this->loadModel("Products");

            // Fetch products that have images of type 1 and category_id matching the received data
            $data = $this->Products->find('all')
                ->contain([
                    'Images' => function ($q) {
                        return $q->where(['image_type_id' => 1]);
                    }
                ])
                ->where([
                    'Products.category_id' => $categoryId
                ])
                ->all();

            // Set the data to be returned as JSON
            $this->set([
                'data' => $data,
                '_serialize' => ['data']
            ]);
        }
    }

    public function getLatestProducts()
    {
        if ($this->request->is('get')) {
            $this->loadModel("Products");

            // Fetch the latest 9 products that have images of type 1
            $data = $this->Products->find('all')
                ->contain([
                    'Images' => function ($q) {
                        return $q->where(['image_type_id' => 1]);
                    }
                ])
                ->order(['Products.created' => 'DESC']) // Order by creation date descending
                ->limit(9) // Limit the results to 9
                ->all();

            foreach($data as $item){
                // Initialize the url property
                $item->url = null;

                if (!empty($item->images)) {
                    $item->url = $item->images[0]->url;
                }
            }

            // Set the data to be returned as JSON
            $this->set([
                'data' => $data,
                '_serialize' => ['data']
            ]);
        }
    }



//     public function getProductLists()
//     {
//         if ($this->request->is('post')) {
//             $receivedData = $this->request->getData();
//             $categoryName = $receivedData['Category'];
//             $query = $receivedData['query'];
//             $this->loadModel('Categories');
//             if ($categoryName == 'search') {
//                 $category = $this->Products->find()
//                     ->where(['name LIKE' => '%' . $query . '%'])
//                     ->first();
//                     // debug($category);
//                     $data = $this->Products->find('all')
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->all();
//             }
//             else {
//             $category = $this->Categories->find()
//                 ->where(['name' => $categoryName])
//                 ->first();

//             if ($category) {
//                 $categoryId = $category->id;
//                 // Fetch products based on the category id
//                 $data = $this->Products->find('all')
//                     ->contain([
//                         'Images' => function ($q) {
//                             return $q->where(['image_type_id' => 1]);
//                         }
//                     ])
//                     ->where(['Products.category_id' => $categoryId])
//                     ->all();
//             } else {
//                 $data = []; // No category found
//             }
//         }

//         // Set the data to be returned as JSON
//         $this->set([
//             'data' => $data,
//             '_serialize' => ['data']
//         ]);
//     }
// }

    public function getProductDetail($id = null)
    {

        $this->request->allowMethod(['post']); // Ensure the request method is POST
        $data = $this->request->getData(); // Get POST data
        $productId = $data['id']; // Extract the 'id' from the POST data

        $this->loadModel('Products');

        $product = $this->Products->find('all')
            ->contain(['Images'])
            ->where(['Products.id' => $productId])
            ->first();

        $imageArray = [];
        foreach ($product->images as $item) {
            $imageArray[] = $item->url;
        }
        // debug($imageArray);
        $product->imageArray = $imageArray;
        $this->set([
            'data' => $product,
            '_serialize' => ['data']
        ]);
    }
}
