<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


//Los modelos se utilizan para interactuar con la base de datos y realizar opraciones como insertar actualizar y eliminar datos.
//Comando para generarls php artisan make:model "nombre modelo".


class products extends Model
{

    //Esto es para cuando usemos el administrador cms(filament) para tenerlo ya preparado.
    protected $fillable = [
        'product_name',
        'stock',
        'description',
        'image',
        'category',
        'price',
    ];


    use HasFactory;
}
