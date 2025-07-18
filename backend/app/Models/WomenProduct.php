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
        'size',
        'color',
        'status',
        'is_featured',
        'size_chart',
    ];

    protected $casts = [
        'gallery' => 'array',
        'is_featured' => 'boolean',
    ];
}
