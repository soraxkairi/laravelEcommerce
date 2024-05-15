<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class ProductController extends Controller
{
     public function index()
    {
        $products = products::all();
        return $products;
    }

    public function categoryProducts($slug)
    {
        $category = Category::where('category_name', $slug)->firstOrFail();
        $products = products::where('category_id', $category->id)->get();
        return $products;
    }

}
