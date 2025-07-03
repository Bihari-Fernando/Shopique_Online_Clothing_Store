<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        // Find Women's category ID
        $womensCategory = Category::where('name', "Women's")->first();

        $products = [
            ['name' => 'Floral Dress', 'size' => 'XS', 'price' => 39.99, 'color' => 'Red', 'image' => '/images/dress1.jpg'],
            ['name' => 'Denim Jeans', 'size' => 'M', 'price' => 49.99, 'color' => 'Blue', 'image' => '/images/jeans1.jpg'],
            ['name' => 'Summer Top', 'size' => 'L', 'price' => 19.99, 'color' => 'White', 'image' => '/images/top1.jpg'],
            ['name' => 'High Heels', 'size' => 'S', 'price' => 59.99, 'color' => 'Black', 'image' => '/images/shoes1.jpg'],
            ['name' => 'Casual Dress', 'size' => 'M', 'price' => 29.99, 'color' => 'Green', 'image' => '/images/dress2.jpg'],
            ['name' => 'Crop Top', 'size' => '2XL', 'price' => 15.99, 'color' => 'Red', 'image' => '/images/top2.jpg'],
            ['name' => 'Sneakers', 'size' => 'XL', 'price' => 69.99, 'color' => 'White', 'image' => '/images/shoes2.jpg'],
            ['name' => 'Skinny Jeans', 'size' => 'XL', 'price' => 45.00, 'color' => 'Black', 'image' => '/images/jeans2.jpg'],
        ];

        foreach ($products as $product) {
            Product::create(array_merge(
                $product,
                ['category_id' => $womensCategory->id]
            ));
        }
    }
}
