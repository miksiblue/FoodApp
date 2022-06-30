<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{

    public function index(){

        $user=auth()->user()->workpeople->restaurant_id;
        $restaurant=Restaurant::find($user);
        $this->authorize('view',$restaurant);
        return view('admin.index',compact('restaurant'));
    }

    public function allRestaurants(){

        $restaurants=Restaurant::all();

        return view('admin.allRestaurants',compact('restaurants'));

    }

    public function create(){

        return view('admin.restaurants.create');
    }

    public function store(Request $request)
    {

        $restaurant=Restaurant::create($request->all());
        $restaurant->image=$request->file('image')->store('products');
        $restaurant->save();
        return redirect()->back();

    }
}
