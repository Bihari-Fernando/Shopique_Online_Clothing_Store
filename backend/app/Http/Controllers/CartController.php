<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $user = auth()->user();

        $cart = Cart::firstOrCreate([
            'user_id' => $user->id
        ]);

        $existingItem = CartItem::where('cart_id', $cart->id)
            ->where('product_id', $request->product_id)
            ->where('size', $request->size)
            ->where('color', $request->color)
            ->first();

        if ($existingItem) {

            $existingItem->quantity += $request->quantity;

            $existingItem->save();

        } else {

            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
                'name' => $request->name,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'size' => $request->size,
                'color' => $request->color,
                'image' => $request->image,
            ]);
        }

        return response()->json([
            'message' => 'Item added to cart'
        ]);
    }

    public function getCart()
    {
        $user = auth()->user();

        $cart = Cart::where('user_id', $user->id)
            ->with('items')
            ->first();

        return response()->json(
            $cart ? $cart->items : []
        );
    }
}