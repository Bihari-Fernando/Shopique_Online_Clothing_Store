<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenProduct extends Model
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
    ];

    protected $casts = [
        'gallery' => 'array',
        'is_featured' => 'boolean',
    ];
}
