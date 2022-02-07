<?php


use App\Http\Controllers\V1\FoodController;
use App\Http\Controllers\V1\AuthController;
use App\Http\Controllers\V1\RestaurantController;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->group(function () {


    Route::group(['middleware' => ['auth:sanctum']], function () {



    });


    Route::get('foods', [FoodController::class, 'index']);
    Route::get('foods/{id}',[FoodController::class,'show']);
    Route::post('foods',[FoodController::class,'store']);
    Route::put('foods/{id}',[FoodController::class,'update']);
    Route::delete('foods/{id}',[FoodController::class,'destroy']);
    Route::post('logout',[AuthController::class,'logout']);

    //Public routes
    Route::get('randomFood', [FoodController::class, 'random']);
   // Route::get('foods', [FoodController::class, 'randomFood']);
    Route::get('foods', [FoodController::class, 'index']);
    Route::get('foods/{id}',[FoodController::class,'show']);
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);
    Route::get('image', [FoodController::class, 'image']);

    Route::get('restaurants', [RestaurantController::class, 'index']);


    // Route::get('foods',[FoodController::class,'index']);
    // Route::apiResource('foods',FoodController::class);
    Route::apiResource('restaurants', RestaurantController::class);
});
