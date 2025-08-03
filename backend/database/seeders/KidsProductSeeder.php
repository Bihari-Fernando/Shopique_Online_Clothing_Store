<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KidsProduct;
use Illuminate\Support\Str;

class KidsProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $products = [
            'Cute Cartoon T-Shirt',
            'Colorful Hoodie',
            'Denim Overalls',
            'Striped Shorts',
            'Floral Dress',
            'Warm Winter Jacket',
            'Casual Polo Shirt',
            'Comfortable Sweatpants'
        ];

        foreach ($products as $index => $productName) {
            KidsProduct::create([
                'name' => $productName,
                'slug' => Str::slug($productName) . '-' . ($index + 1), // unique slug
                'description' => 'Comfortable and stylish kids clothing perfect for daily wear.',
                'price' => 1500.00,
                'discount_price' => 1200.00,
                'image' => '/storage/kids/kids.jpg',
                'gallery' => [
                    '/storage/kids/kids.jpg',
                    '/storage/kids/kids.jpg'
                ],
                'quantity' => 30,
                'sizes' => ['XS', 'S', 'M', 'L'],
                'colors' => ['Red', 'Blue', 'Green'],
                'status' => 'active',
                'is_featured' => true,
                'size_chart' => '/storage/kids/sizechart.png',
                'top_product' => $index < 3 ? true : false,
            ]);
        }
    }
}
