<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\products;
use Illuminate\Http\Request;
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


}
