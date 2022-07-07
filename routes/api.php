<?php


use App\Http\Controllers\V1\FoodController;
use App\Http\Controllers\V1\AuthController;
use App\Http\Controllers\V1\OrderController;
use App\Http\Controllers\V1\RestaurantController;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


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

    Route::get('proba1',[\App\Http\Controllers\V1\AuthController::class,'findUser'])->middleware('auth:sanctum');

    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::get('orders', [OrderController::class, 'index']);


    });

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });




//    Route::middleware('auth:sanctum')->get('user',function (Request $request){
//        return $request->user();
//    });

//    Route::get('proba1',[AuthController::class,'findUser']);



    Route::apiResource('category', \App\Http\Controllers\V1\CategoryController::class);




    Route::controller(OrderController::class)->group(function (){


        Route::get('/ordersActive', 'activeOrders')->name('activeOrders');
        Route::get('/order/{id}', 'show');
        Route::put('orders/{id}','update');
        Route::delete('orders/{cart_id}','destroy');
        Route::post('orders', 'store');
       Route::get('sredina','sredina');

    });


    Route::controller(FoodController::class)->group(function (){

        Route::get('foods','index');
        Route::get('foods/{id}','show');
        Route::post('foods','store');
        Route::put('foods/{id}','update');
        Route::delete('foods/{id}','destroy');
        Route::get('randomFood', [FoodController::class, 'random']);

    });


    Route::controller(RestaurantController::class)->group(function (){
        Route::get('/proba', 'proba')->name('proba');
        Route::get('/proba/{key}','proba2')->name('probakey');
        Route::get('/probaInput', 'probaInput')->name('probaInput');
        Route::get('/search/{key}', 'search')->name('search');
        Route::apiResource('restaurants', RestaurantController::class);
        Route::get('/ocena/{id}','ocena');
        Route::post('/storeScore','storeScore')->name('storeScore');
        Route::get('restaurants','index');
        Route::get('filter',  'filter')->name('filter');

    });

    Route::controller(AuthController::class)->group(function (){

        Route::get('findLoginUser', 'findLoginPerson')->name('findLoginPerson');
        Route::get('findUser','findUser');
        Route::post('logout','logout');
        Route::post('register','register');
        Route::post('login','login');
        Route::post('favorite',  'storeFavoriteRestaurant');
        Route::delete('favoritee',  'deleteFavoriteRestaurant');

    });

    Route::controller(\App\Http\Controllers\V1\WorkingpeopleController::class)->group(function (){


        Route::post('storeStaff','store');
        Route::get('allStaff','allStaff');
        Route::delete('refusal/{id}','refusal');
        Route::get('svi','svi');


    });


});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



