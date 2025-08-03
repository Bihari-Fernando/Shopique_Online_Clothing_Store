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
            ['name' => "Women's", 'image' => '/storage/Categories/women.jpg', 'route' => '/womens'],
            ['name' => "Men's", 'image' => '/storage/Categories/men.jpg', 'route' => '/mens'],
            ['name' => "Kids", 'image' => '/storage/Categories/kids.jpg', 'route' => '/kids'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
