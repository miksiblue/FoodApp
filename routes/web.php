<?php

use App\Models\Workpeople;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('restaurantlist', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {

    $user=auth()->user()->id;
    $workpeople=Workpeople::where('user_id','=',$user)->get();
//    if(count($workpeople) !== 0  ){
//        return Inertia::render('Admin');
//    }
// else{
     return Inertia::render('Dashboard');

// }
//http://127.0.0.1:8000/dashboard stari admin dashboard

})->middleware(['auth', 'verified'])->name('dashboard');




Route::get('/foodlist', function () {
    return Inertia::render('FoodList');
})->middleware(['auth', 'verified'])->name('foodlist');

Route::get('/restaurantlist', function () {
    return Inertia::render('RestaurantList');
})->middleware(['auth', 'verified'])->name('restaurantlist');

Route::get('/create', function () {

    if (\Illuminate\Support\Facades\Auth::id() === 3) {
        return Inertia::render('Create');
    }
})->middleware(['auth', 'verified'])->name('create');

Route::get('/createnewfood', function () {

        return Inertia::render('CreateNewFood');

})->middleware(['auth', 'verified'])->name('createnewfood');




Route::get('/showactiveorders', function () {
    $user=auth()->user()->id;
    $workpeople=Workpeople::where('user_id','=',$user)->get();
if(count($workpeople) !== 0  ) {
    return Inertia::render('ShowActiveOrders');
}

})->middleware(['auth', 'verified'])->name('showActiveOrders');

Route::get('/restaurants/{id}', function () {

    return Inertia::render('ShowRestaurant');

})->middleware(['auth', 'verified'])->name('onerestaurant');

Route::get('/admin', function () {
    $user=auth()->user()->id;
    $workpeople=Workpeople::where('user_id','=',$user)->get();
    if(count($workpeople) !== 0  ) {
        return Inertia::render('Admin');
    }
})->middleware(['auth', 'verified'])->name('admin');



Route::get('/proba', function () {

    return Inertia::render('PageForTest');

})->name('test');




Route::get('/profil', function () {

    return Inertia::render('UserProfile');

})->middleware(['auth', 'verified'])->name('profil');




Route::post('/create', [\App\Http\Controllers\V1\OrderController::class,'store'])->name('orders');

Route::get('/ordersActive', [\App\Http\Controllers\V1\OrderController::class,'activeOrders'])->name('activeOrders');
Route::get('/orders', [\App\Http\Controllers\V1\OrderController::class,'index'])->name('index');
Route::put('orders/{id}',[\App\Http\Controllers\V1\OrderController::class,'update'])->name('updateOrder');
Route::get('/zaposleni', [\App\Http\Controllers\V1\WorkingpeopleController::class, 'index'])->name('zaposleni');


Route::get('proba1',[\App\Http\Controllers\V1\AuthController::class,'findUser']);
Route::post('login',[\App\Http\Controllers\V1\AuthController::class,'login']);
//Route::get('comments',[\App\Http\Controllers\Admin\CommentController::class,'create']);
Route::post('comments/store/{id}',[\App\Http\Controllers\Admin\CommentController::class,'store']);
Route::post('comments/reply/{id}',[\App\Http\Controllers\Admin\CommentController::class,'reply']);

Route::get('comments/{id}',[\App\Http\Controllers\Admin\FoodController::class,'show']);

Route::controller(\App\Http\Controllers\V1\FoodController::class)->group(function (){
    Route::put('removeAction/{id}','removeAction');
    Route::get('food/{id}','show');
    Route::put('food/{id}','update');
    Route::put('saleFood/{id}','saleFood');
    Route::get('foods', 'index')->name('food');
    Route::get('promotions','promotions')->name('promotions');
    Route::get('foods','restaurantFood')->name('restaurantFood');
    Route::post('/createe', 'store')->name('food2');
});


Route::controller(\App\Http\Controllers\V1\RestaurantController::class)->group(function (){
    Route::post('/storeScore','storeScore')->name('storeScore');
    Route::get('/orderScore','orderScore')->name('orderScore');
    Route::get('filterCategories/','filterCategories')->name('filterCategories');
    Route::get('/restaurant', 'index')->name('allRestaurants');
    Route::get('/testic','addOrRemuveFavorite')->name('addOrRemuveFavorite');
    Route::post('/createFood', 'store')->name('restaurants');
});

Route::controller(\App\Http\Controllers\V1\AuthController::class)->group(function (){
    Route::get('/logout','logout')->name('logoutt');
    Route::get('/favoriteRestaurant','favoriteRestaurant')->name('favoriteRestaurants');
    Route::post('storeFavorite',  'storeFavoriteRestaurant')->name('storeFavoriteRestoran');
    Route::post('favoritee',  'deleteFavoriteRestaurant')->name('deleteFavoriteRestaurant');
    Route::get('findUser','findUser')->name('findUser');
    Route::get('findLoginUser',  'findLoginPerson')->name('findLoginPerson');
    Route::get('userProfile',  'userProfile')->name('userProfile');
});

Route::middleware('isStaff')->name('admin.')->prefix('admin')->group(function () {

//    Route::get('restaurants',[\App\Http\Controllers\Admin\RestaurantController::class,'index'])->name('index');
    Route::get('dashboard',[\App\Http\Controllers\Admin\UserController::class,'userInfo'])->name('dashboard');
    Route::get('createStaff',[\App\Http\Controllers\Admin\UserController::class,'create'])->name('createStaff');
    Route::patch('storeStaff',[\App\Http\Controllers\Admin\UserController::class,'store'])->name('storeStaff');
    Route::delete('deleteStaff/{id}',[\App\Http\Controllers\Admin\UserController::class,'refusal']);
    Route::get('orders',[\App\Http\Controllers\Admin\OrderController::class,'index'])->name('orderIndex');
    Route::get('orders/{id}',[\App\Http\Controllers\Admin\OrderController::class,'show'])->name('orderShow');
    Route::get('ordersAll/',[\App\Http\Controllers\Admin\OrderController::class,'showAllOrders'])->name('orderShowAll');
    Route::patch('ordersEdit/{id}',[\App\Http\Controllers\Admin\OrderController::class,'update']);

    Route::controller(\App\Http\Controllers\Admin\RestaurantController::class)->group(function (){
        Route::get('restaurants','index')->name('index');
        Route::get('restaurant/create','create')->name('create')->middleware('isAdmin');
        Route::post('restaurant/store','store')->name('store')->middleware('isAdmin');
        Route::get('allRestaurants','allRestaurants')->name('allRestaurants')->middleware('isAdmin');
    });

    Route::controller(\App\Http\Controllers\Admin\StaffController::class)->name('staff.')->group(function(){
        Route::get('staff','index')->name('index')->middleware('isManager');
    });

    Route::controller(\App\Http\Controllers\Admin\FoodController::class)->name('food.')->group(function(){
        Route::get('food/create','create')->name('create');
        Route::post('food/store','store')->name('store');
        Route::delete('food/delete/{id}','destroy')->middleware('isManager');
        Route::patch('food/sale/{id}','saleFood')->middleware('isManager');
    });
});

require __DIR__.'/auth.php';


