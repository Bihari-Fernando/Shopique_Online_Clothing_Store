<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WomenProduct;

class WomenProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WomenProduct::create([
            'name' => 'Shirred Back Knotted Sweetheart Neck Top',
            'slug' => 'Shirred Back Knotted Sweetheart Neck Top',
            'description' => 'Perfect dress for summer evenings.',
            'price' => 4500.00,
            'discount_price' => 3999.99,
            'image' => '/storage/women/blouse/blouse5.jpg',
            'gallery' => ['/storage/women/blouse/blouse6.jpg', '/storage/women/blouse/blouse5.jpg'],
            'quantity' => 20,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['White', 'Green'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => true,
        ]);

        WomenProduct::create([
            'name' => 'Classic Button-Up Shirt Blouse',
            'slug' => 'classic-button-up-shirt-blouse',
            'description' => 'A timeless shirt-style blouse with button-up front and cuffed sleeves—perfect for work or casual wear.',
            'price' => 3800.00,
            'discount_price' => 3499.00,
            'image' => '/storage/women/shirt.jpg',
            'gallery' => [
                '/storage/women/shirt4.jpg',
                '/storage/women/shirt2.jpg',
                '/storage/women/shirt3.jpg'
            ],
            'quantity' => 18,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['Pink', 'blue', 'Rose Pink'],
            'status' => 'active',
            'is_featured' => false,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => true,
        ]);

        WomenProduct::create([
            'name' => 'Floral Long Frock',
            'slug' => 'floral-Long-frock',
            'description' => 'Lightweight floral long frock ideal for sunny days and casual outings.',
            'price' => 4200.00,
            'discount_price' => 3899.00,
            'image' => '/storage/women/frocks/frock2.jpg',
            'gallery' => [
                '/storage/women/frocks/frock1.jpg',
                '/storage/women/frocks/frock2.jpg',
                '/storage/women/frocks/frock3.jpg'
            ],
            'quantity' => 15,
            'sizes' => ['XS', 'S', 'M', 'L'],
            'colors' => ['Pink', 'Purple', 'White'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => false,
        ]);

        WomenProduct::create([
            'name' => 'Corduroy Flap Pocket Blouse & Trouser',
            'slug' => 'corduroy-flap-pocket-blouse-trouser',
            'description' => 'Stylish corduroy blouse and trouser set featuring flap pockets, perfect for casual or semi-formal wear.',
            'price' => 5600.00,
            'discount_price' => 4999.00,
            'image' => '/storage/women/corduroy/corduroy.jpg',
            'gallery' => [
                '/storage/women/corduroy/corduroy1.jpg',
                '/storage/women/corduroy/corduroy2.jpg',
                '/storage/women/corduroy/corduroy3.jpg'
            ],
            'quantity' => 20,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['Purple', 'Blue', 'Black', 'White'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => true,
        ]);

        WomenProduct::create([
            'name' => 'Women\'s 2 Piece Outfits Short Sleeve Shirt & Long Skirt',
            'slug' => 'Women\'s 2 Piece Outfits Short Sleeve Shirt & Long Skirt',
            'description' => 'Stylish corduroy blouse and trouser set featuring flap pockets, perfect for casual or semi-formal wear.',
            'price' => 5600.00,
            'discount_price' => 4999.00,
            'image' => '/storage/women/skirt/skirt.jpg',
            'gallery' => [
                '/storage/women/skirt/skirt1.jpg',
                '/storage/women/skirt/skirt2.jpg',
                '/storage/women/skirt/skirt3.jpg'
            ],
            'quantity' => 20,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['red', 'blue', 'green'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => false,
        ]);

        WomenProduct::create([
            'name' => 'High-Waisted Wide Leg Pant',
            'slug' => 'high-waisted-wide-leg-pant',
            'description' => 'Comfortable and chic high-waisted wide leg pants perfect for everyday wear or office style. Flattering fit with flowing silhouette.',
            'price' => 4700.00,
            'discount_price' => 4299.00,
            'image' => '/storage/women/WideLegPant/pant.jpg',
            'gallery' => [
                '/storage/women/WideLegPant/pant1.jpg',
                '/storage/women/WideLegPant/pant2.jpg',
                '/storage/women/WideLegPant/pant3.jpg'
            ],
            'quantity' => 25,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['Gray', 'White', 'Tortilla', 'Cedar'],
            'status' => 'active',
            'is_featured' => false,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => false,
        ]);

        WomenProduct::create([
            'name' => 'Long Sleeveless Frock',
            'slug' => 'long-sleeveless-frock',
            'description' => 'Elegant and breezy long sleeveless frock, perfect for summer outings and special occasions. Designed for comfort and graceful style.',
            'price' => 6200.00,
            'discount_price' => 5790.00,
            'image' => '/storage/women/frocks/frock5.jpg',
            'gallery' => [
                '/storage/women/frocks/frock7.jpg',
                '/storage/women/frocks/frock5.jpg',
                '/storage/women/frocks/frock6.jpg'
            ],
            'quantity' => 30,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['White', 'Red', 'Green'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => true,
        ]);

        WomenProduct::create([
            'name' => 'Butterfly Sleeve Tie Back Schiffy Top',
            'slug' => 'Butterfly Sleeve Tie Back Schiffy Top',
            'description' => 'Perfect dress for summer evenings.',
            'price' => 2500.00,
            'discount_price' => 1999.99,
            'image' => '/storage/women/blouse/blouse9.jpg',
            'gallery' => ['/storage/women/blouse/blouse7.jpg', '/storage/women/blouse/blouse8.jpg', '/storage/women/blouse/blouse9.jpg', '/storage/women/blouse/blouse10.jpg', '/storage/women/blouse/blouse11.jpg'],
            'quantity' => 20,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['White', 'Yellow', 'Pink','Purple','Brown'],
            'status' => 'active',
            'is_featured' => true,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => false,
        ]);


        WomenProduct::create([
            'name' => 'Long One-Color Sleeves Frock',
            'slug' => 'long-one-color-sleeves-frock',
            'description' => 'A simple yet classy long frock with short sleeves, perfect for formal occasions and evening wear. Made with premium breathable fabric.',
            'price' => 5400.00,
            'discount_price' => 4999.00,
            'image' => '/storage/women/frocks/frock8.jpg',
            'gallery' => [
                '/storage/women/frocks/frock4.jpg',
                '/storage/women/frocks/frock8.jpg'
            ],
            'quantity' => 20,
            'sizes' => ['S', 'M', 'L', 'XL'],
            'colors' => ['Pink'],
            'status' => 'active',
            'is_featured' => false,
            'size_chart' => '/storage/women/sizecharts/sizechart.png',
            'top_product' => false,
        ]);
    }
}
