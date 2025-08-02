<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WomenProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'discount_price',
        'image',
        'gallery',
        'quantity',
        'sizes',
        'colors',
        'status',
        'is_featured',
        'size_chart',
        'top_product',
    ];

    protected $casts = [
        'colors' => 'array',
        'sizes' => 'array',
        'gallery' => 'array',
        'is_featured' => 'boolean',
    ];
}
