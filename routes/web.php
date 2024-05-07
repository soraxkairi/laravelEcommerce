<?php

use App\Filament\Resources\CategoryResource;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/home', function () {
//     return view('welcome');
// });


//El enrutamiento en Laravel es el proceso de definir las rutas de una aplicacion web y como deben ser manejadas.Una ruta se define como una URL y una accion que se ejecuta en el servidor cuando se accede a ella.La accion puede ser una funcion o un metodo de un controlador que devuelve una respuesta HTTP.
Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('products', [ProductController::class, 'index']);

Route::get('category', [CategoryController::class, 'categories']);

