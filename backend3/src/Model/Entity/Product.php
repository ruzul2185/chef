<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Product Entity
 *
 * @property int $id
 * @property string|null $name
 * @property int|null $original_price
 * @property int|null $offer_price
 * @property int|null $discount
 * @property string $description
 * @property \Cake\I18n\FrozenTime $created
 * @property \Cake\I18n\FrozenTime|null $modified
 * @property int|null $category_id
 *
 * @property \App\Model\Entity\Category $category
 * @property \App\Model\Entity\Image[] $images
 */
class Product extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'name' => true,
        'original_price' => true,
        'offer_price' => true,
        'discount' => true,
        'description' => true,
        'created' => true,
        'modified' => true,
        'category_id' => true,
        'category' => true,
        'images' => true,
    ];
}
