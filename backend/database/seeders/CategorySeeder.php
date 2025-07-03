<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $categories = [
            ['name' => "Women's", 'image' => '/images/women.jpg', 'route' => '/womens'],
            ['name' => "Men's", 'image' => '/images/men.jpg', 'route' => '/mens'],
            ['name' => "Kids", 'image' => '/images/kids.jpg', 'route' => '/kids'],
            ['name' => "Accessories", 'image' => '/images/accessories.jpg', 'route' => '/accessories'],
            ['name' => "Footwear", 'image' => '/images/footwear.jpg', 'route' => '/footwear'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
