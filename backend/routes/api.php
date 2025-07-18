<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\API\AuthController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Categories
Route::get('/categories', [CategoryController::class, 'index']);

// Products (general and per-category)
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{category}', [ProductController::class, 'getByCategory']);
Route::post('/products/{category}', [ProductController::class, 'store']); // optional
