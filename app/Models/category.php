<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $table = "category";

    protected $fillable = [
        'category_name',
    ];


    public function categories()
    {
        $category = category::all();
        return $category;
    }

    public function product()
    {
        return $this->hasMany(products::class);
    }


    use HasFactory;
}
