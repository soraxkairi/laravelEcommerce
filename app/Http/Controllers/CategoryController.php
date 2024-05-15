<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function categories()
    {
        $category = category::all();
        return $category;
    }

    public function showCategory($slug)
    {
        $category = category::all();
        return Inertia::render('Category', ['slug' => $slug, 'data' => $category]);

    }


}
