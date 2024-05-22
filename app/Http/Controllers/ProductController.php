<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Inertia\Inertia;
class ProductController extends Controller
{
    public function index()
    {
        $products = products::orderBy('created_at', 'desc')->take(4)->get();
        return $products;
    }

    public function categoryProducts($slug)
    {
        $category = Category::where('category_name', $slug)->firstOrFail();
        $products = products::where('category_id', $category->id)->get();
        return $products;
    }

    public function ProductPage ($slug,$productID)
    {
        $product = products::findOrFail($productID);
        return Inertia::render('Product', ['slug' => $slug, 'product' => $product]);
    }

    public function saveProduct(Request $request)
    {

        $product = $request->all();

        // Obtener el carrito de la sesión, o inicializarlo si no existe
        $cart = Session::get('cart', []);

        // Añadir el nuevo producto al carrito
        $cart[] = $product;

        // Guardar el carrito actualizado en la sesión
        Session::put('cart', $cart);


        return response()->json(['message' => 'Producto añadido al carrito', 'product' => $product,'cart'=> $cart]);
    }

    public function showCart(Request $request)
    {
        $cart = Session::get('cart', []);

        return response()->json(['cart' => $cart]);
    }



}
