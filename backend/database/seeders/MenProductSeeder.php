<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MenProduct;
use Illuminate\Support\Str;

class MenProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $products = [
            'Slim Fit Casual Shirt',
            'Formal Cotton Shirt',
            'Denim Button-Up Shirt',
            'Checked Office Shirt',
            'Linen Summer Shirt',
            'Long Sleeve Dress Shirt',
            'Short Sleeve Polo Shirt',
            'Classic Oxford Shirt'
        ];

        foreach ($products as $index => $productName) {
            MenProduct::create([
                'name' => $productName,
                'slug' => Str::slug($productName) . '-' . ($index + 1), // creates slug like 'slim-fit-casual-shirt-1'
                'description' => 'Stylish slim fit shirt for everyday casual wear.',
                'price' => 3500.00,
                'discount_price' => 2999.99,
                'image' => '/storage/men/men.jpg',
                'gallery' => [
                    '/storage/men/men.jpg',
                    '/storage/men/men.jpg'
                ],
                'quantity' => 25,
                'sizes' => ['S', 'M', 'L', 'XL'],
                'colors' => ['Black', 'White', 'Blue'],
                'status' => 'active',
                'is_featured' => true,
                'size_chart' => '/storage/men/sizechart.png',
                'top_product' => $index < 3 ? true : false,
            ]);
        }
    }
}
