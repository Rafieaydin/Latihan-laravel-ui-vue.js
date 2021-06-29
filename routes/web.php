<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('/', function () {
    return view('index');
});

// untuk render halaman yang sama jika memakai vue router
// yang slug itu buat nyimpen id
Route::any('{url}', function () {
    return view('index');
// jika urlnya tidak ada maka akan ada eror not found
})->where('url','.*');


