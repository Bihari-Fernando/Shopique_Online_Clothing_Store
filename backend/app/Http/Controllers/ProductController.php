<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\WomenProduct;
use App\Models\MenProduct;
use App\Models\KidsProduct;
use App\Models\AccessoriesProduct;

class ProductController extends Controller
{
    public function index()
    {
        $allProducts = [];

        foreach ($this->modelMap as $category => $model) {
            $products = $model::all()->map(function ($product) use ($category) {
                $product->category = $category;
                return $product;
            });
            $allProducts = array_merge($allProducts, $products->toArray());
        }

        return response()->json($allProducts);
    }

    protected $modelMap = [
        'women' => WomenProduct::class,
        'men' => MenProduct::class,
        'kids' => KidsProduct::class,
        'accessories' => AccessoriesProduct::class,
    ];

    // Get all products from specific category
    public function getByCategory($category)
    {
        $model = $this->getModelForCategory($category);
        if (!$model) {
            return response()->json(['error' => 'Invalid category'], 404);
        }

        $products = $model::all();
        return response()->json($products);
    }

    // Store new product in specific category
    public function store(Request $request, $category)
    {
        $model = $this->getModelForCategory($category);
        if (!$model) {
            return response()->json(['error' => 'Invalid category'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'gallery.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'quantity' => 'required|integer',
            'description' => 'nullable|string',
        ]);

        // Handle image
        $imagePath = $request->hasFile('image')
            ? $request->file('image')->store('products/' . $category, 'public')
            : null;

        // Handle gallery
        $galleryPaths = [];
        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $file) {
                $galleryPaths[] = $file->store('products/' . $category . '/gallery', 'public');
            }
        }

        $product = $model::create([
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']) . '-' . uniqid(),
            'price' => $validated['price'],
            'image' => $imagePath,
            'gallery' => json_encode($galleryPaths),
            'quantity' => $validated['quantity'],
            'description' => $validated['description'] ?? null,
        ]);

        return response()->json($product, 201);
    }

    // Helper to get model class
    private function getModelForCategory($category)
    {
        return $this->modelMap[$category] ?? null;
    }
}
