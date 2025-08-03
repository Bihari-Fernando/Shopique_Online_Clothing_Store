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
    protected $modelMap = [
        'women' => WomenProduct::class,
        'men' => MenProduct::class,
        'kids' => KidsProduct::class,
        'accessories' => AccessoriesProduct::class,
    ];

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

    public function getByCategory($category)
    {
        $model = $this->getModelForCategory($category);
        if (!$model) {
            return response()->json(['error' => 'Invalid category'], 404);
        }

        $products = $model::all();
        return response()->json($products);
    }

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
            'top_product' => 'nullable|boolean', // <-- Add validation for top_product if you want to set it on create
        ]);

        // Handle image upload
        $imagePath = $request->hasFile('image')
            ? $request->file('image')->store('products/' . $category, 'public')
            : null;

        // Handle gallery upload
        $galleryPaths = [];
        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $file) {
                $galleryPaths[] = $file->store('products/' . $category . '/gallery', 'public');
            }
        }

        $productData = [
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']) . '-' . uniqid(),
            'price' => $validated['price'],
            'image' => $imagePath,
            'gallery' => json_encode($galleryPaths),
            'quantity' => $validated['quantity'],
            'description' => $validated['description'] ?? null,
            'top_product' => $validated['top_product'] ?? 0,  // default 0 if not provided
        ];

        $product = $model::create($productData);

        return response()->json($product, 201);
    }

    // New method: get all top-rated products from all categories
    public function getTopRated()
    {
        $topProducts = [];

        foreach ($this->modelMap as $category => $model) {
            $products = $model::where('top_product', 1)
                ->get()
                ->map(function ($product) use ($category) {
                    $product->category = $category;
                    return $product;
                });
            $topProducts = array_merge($topProducts, $products->toArray());
        }

        return response()->json($topProducts);
    }

    private function getModelForCategory($category)
    {
        return $this->modelMap[$category] ?? null;
    }

    public function getProductById($category, $id)
    {
        $model = $this->getModelForCategory($category);
        if (!$model) {
            return response()->json(['error' => 'Invalid category'], 404);
        }

        $product = $model::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return response()->json($product);

        $product->category = $category;

        return response()->json($product);
    }


    public function updateQuantity(Request $request, $category, $id)
    {
        $model = $this->getModelForCategory($category);
        if (!$model) {
            return response()->json(['error' => 'Invalid category'], 404);
        }

        $validated = $request->validate([
            'action' => 'required|in:increment,decrement',
        ]);

        $product = $model::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        if ($validated['action'] === 'increment') {
            $product->quantity += 1;
        } elseif ($validated['action'] === 'decrement' && $product->quantity > 0) {
            $product->quantity -= 1;
        }

        $product->save();

        return response()->json($product);
    }
}
