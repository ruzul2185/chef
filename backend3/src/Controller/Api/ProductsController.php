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
        $this->Authentication->allowUnauthenticated(['getProductLists', 'getProductDetail','getLatestProducts','getAllProduct','getMixData']);
    }
    //api url : http://localhost:8765/api/Items/getProducts

    //this api uses as search api in react
    public function getProductLists()
{
    if ($this->request->is('post')) {
        $receivedData = $this->request->getData();
        $categoryName = $receivedData['Category'];
        $query = $receivedData['query'];

        $this->loadModel('Categories');
        $this->loadModel('Products');
        $this->loadModel('Companies'); // Load Companies model if not already loaded

        if ($categoryName == 'search') {
            // Perform search based on product name or company name
            $products = $this->Products->find()
                ->contain([
                    'Images' => function ($q) {
                        return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                    },
                    'Companies' => function ($q) {
                        return $q->select(['Companies.id', 'Companies.name']);
                    }
                ])
                ->where([
                    'OR' => [
                        'Products.name LIKE' => '%' . $query . '%',
                        'Companies.name LIKE' => '%' . $query . '%'
                    ]
                ])
                ->all(); // Fetch all matching products

            // If no product matches the search, handle the case
            $data = $products->isEmpty() ? [] : $products;

        } else {
            // Fetch category ID based on category name
            $category = $this->Categories->find()
                ->where(['Categories.name' => $categoryName])
                ->first();

            if (!$category) {
                // Handle case where category is not found
                $data = [];
            } else {
                $categoryId = $category->id;

                // Fetch products under the found category
                $products = $this->Products->find()
                    ->where(['Products.category_id' => $categoryId])
                    ->contain([
                        'Images' => function ($q) {
                            return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                        },
                        'Companies' => function ($q) {
                            return $q->select(['Companies.id', 'Companies.name']);
                        }
                    ])
                    ->all();

                $data = $products->isEmpty() ? [] : $products;
            }
        }

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


    public function getAllProduct()
{
    if ($this->request->is('post')) {
        $receivedData = $this->request->getData();
        $categoryName = $receivedData['Category'];
        $query = $receivedData['query'];

        $this->loadModel('Categories');
        $this->loadModel('Products');

        if ($categoryName == 'search') {
            // Perform search based on product name
            $product = $this->Products->find()
                ->where(['name LIKE' => '%' . $query . '%'])
                ->contain([
                    'Images' => function ($q) {
                        return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                    }
                ])
                ->first();

            if (!$product) {
                // Handle case where no product matches the search
                $data = [];
            } else {
                $data = [$product];
            }
        } else {
            // Fetch all categories with the specified parent_name
            $categories = $this->Categories->find()
                ->where(['parent_name' => $categoryName])
                ->all();

            if ($categories->isEmpty()) {
                // Handle case where no categories match the given name
                $data = [];
            } else {
                // Extract category IDs
                $categoryIds = $categories->extract('id')->toArray();

                // Fetch all products under these categories
                $data = $this->Products->find('all')
                    ->contain([
                        'Images' => function ($q) {
                            return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                        }
                    ])
                    ->where([
                        'Products.category_id IN' => $categoryIds
                    ])
                    ->all();
            }
        }

        // Set the data to be returned as JSON
        $this->set([
            'data' => $data,
            '_serialize' => ['data']
        ]);
    }
}


// public function getAllProduct()
// {
//     if ($this->request->is('post')) {
//         $receivedData = $this->request->getData();
//         $categoryName = $receivedData['Category'];
//         $query = $receivedData['query'];

//         $this->loadModel('Categories');
//         $this->loadModel('Products');

//         if ($categoryName == 'search') {
//             // Perform search based on product name
//             $product = $this->Products->find()
//                 ->where(['name LIKE' => '%' . $query . '%'])
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->first();

//             $data = $product ? [$product] : [];
//         } else if ($categoryName == 'kitchen appliance') {
//             // Specific category IDs for Kitchen Appliance
//             $categoryIds = [20, 21, 22, 23, 24, 25, 26];

//             // Fetch all products under these category IDs
//             $data = $this->Products->find('all')
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->where(['Products.category_id IN' => $categoryIds])
//                 ->all();
//         } else if ($categoryName == 'cooking appliance' || $categoryName == 'Beverage' || $categoryName == 'induction' || $categoryName == 'Breakfast and Snacks') {

//             // Hardcoded category IDs for Cooking Appliance and others
//             $hardcodedCategoryIds = [17, 18, 19]; // Replace with actual IDs as needed

//             // Fetch all products under these hardcoded category IDs
//             $data = $this->Products->find('all')
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->where(['Products.category_id IN' => $hardcodedCategoryIds])
//                 ->all();
//         } else {
//             // Fetch all categories with the specified parent_name
//             $categories = $this->Categories->find()
//                 ->where(['parent_name' => $categoryName])
//                 ->all();

//             if ($categories->isEmpty()) {
//                 // Handle case where no categories match the given name
//                 $data = [];
//             } else {
//                 // Extract category IDs
//                 $categoryIds = $categories->extract('id')->toArray();

//                 // Fetch all products under these categories
//                 $data = $this->Products->find('all')
//                     ->contain([
//                         'Images' => function ($q) {
//                             return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                         }
//                     ])
//                     ->where(['Products.category_id IN' => $categoryIds])
//                     ->all();
//             }
//         }

//         // Set the data to be returned as JSON
//         $this->set([
//             'data' => $data,
//             '_serialize' => ['data']
//         ]);
//     }
// }


// public function getAllProduct()
// {
//     if ($this->request->is('post')) {
//         $receivedData = $this->request->getData();
//         $categoryName = $receivedData['Category'];
//         $query = $receivedData['query'];

//         $this->loadModel('Categories');
//         $this->loadModel('Products');

//         if ($categoryName == 'search') {
//             // Perform search based on product name
//             $product = $this->Products->find()
//                 ->where(['name LIKE' => '%' . $query . '%'])
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->first();

//             $data = $product ? [$product] : [];
//         } else if ($categoryName == 'cooking appliance' || $categoryName == 'kitchen appliance' || $categoryName == 'Beverage' || $categoryName == 'induction' || $categoryName == 'Breakfast and Snacks') {

//             // Hardcoded category IDs for Cooking Appliance (e.g., OTG, Microwave Oven)
//             $hardcodedCategoryIds = [17, 18, 19]; // Replace 1, 2 with actual category IDs from your DB

//             // Fetch all products under these hardcoded category IDs
//             $data = $this->Products->find('all')
//                 ->contain([
//                     'Images' => function ($q) {
//                         return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                     }
//                 ])
//                 ->where(['Products.category_id IN' => $hardcodedCategoryIds])
//                 ->all();
//         } else {
//             // Fetch all categories with the specified parent_name
//             $categories = $this->Categories->find()
//                 ->where(['parent_name' => $categoryName])
//                 ->all();

//             if ($categories->isEmpty()) {
//                 // Handle case where no categories match the given name
//                 $data = [];
//             } else {
//                 // Extract category IDs
//                 $categoryIds = $categories->extract('id')->toArray();

//                 // Fetch all products under these categories
//                 $data = $this->Products->find('all')
//                     ->contain([
//                         'Images' => function ($q) {
//                             return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
//                         }
//                     ])
//                     ->where(['Products.category_id IN' => $categoryIds])
//                     ->all();
//             }
//         }

//         // Set the data to be returned as JSON
//         $this->set([
//             'data' => $data,
//             '_serialize' => ['data']
//         ]);
//     }
// }

public function getMixData()
{
    if ($this->request->is('post')) {
        $receivedData = $this->request->getData();
        $categoryName = $receivedData['Category'];
        $query = $receivedData['query'];

        $this->loadModel('Categories');
        $this->loadModel('Products');

        if ($categoryName == 'search') {
            // Perform search based on product name
            $product = $this->Products->find()
                ->where(['name LIKE' => '%' . $query . '%'])
                ->contain([
                    'Images' => function ($q) {
                        return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                    }
                ])
                ->first();

            if (!$product) {
                // Handle case where no product matches the search
                $data = [];
            } else {
                $data = [$product];
            }
        } else {
            // Fetch categories with the specified parent_names
            $parentNames = ['cooktop', 'cookware']; // Example array of parent names
            $categories = $this->Categories->find()
                ->where(['parent_name IN' => $parentNames])
                ->all();

            if ($categories->isEmpty()) {
                // Handle case where no categories match the given parent names
                $data = [];
            } else {
                // Extract category IDs
                $categoryIds = $categories->extract('id')->toArray();

                // Fetch all products under these categories
                $data = $this->Products->find('all')
                    ->contain([
                        'Images' => function ($q) {
                            return $q->select(['product_id', 'url'])->where(['image_type_id' => 1]);
                        }
                    ])
                    ->where([
                        'Products.category_id IN' => $categoryIds
                    ])
                    ->all();
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

    // Adding the image URLs array to the product object
    $product->imageArray = $imageArray;

    // Preserve the description field formatting
    $product->description = nl2br($product->description); // Converts newlines to <br> tags for HTML rendering

    $this->set([
        'data' => $product,
        '_serialize' => ['data']
    ]);
}

}
