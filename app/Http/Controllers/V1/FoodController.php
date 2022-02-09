<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Food;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

use phpDocumentor\Reflection\Types\Compound;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        $restaurants=Restaurant::all();
         $food=Food::all();

        return response()->json($food, 201);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {

//        $food=new Food;
//        $food->name=$request->input('name');
//        $food->price=$request->input('price');
//        $food->description=$request->input('description');
//        $food->calories=$request->input('calories');
//        $food->restaurant_id=$request->input('restaurant_id');
//        $food->image=$request->file('image')->store('products');
//
//        $food->save();
//        $input['category'] = $request->input('category');
//        $food->categories()->attach($input['category']);
//        $input['ingredient'] = $request->input('ingredient');
//        $food->ingredients()->attach($input['ingredient']);
//        $food->save();

//

        $food = Food::create($request->all());
        $food->image=$request->file('image')->store('products');
        $food->save();
        $input['category'] = $request->input('category');
        $food->categories()->attach($input['category']);
        $input['ingredient'] = $request->input('ingredient');
        $food->ingredients()->attach($input['ingredient']);



        return $food;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
      return  Food::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $food = Food::find($id);
        $input['category'] = $request->input('category');
        $food->categories()->attach($input['category']);
        $food->update($request->all());
        return $food;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id, Food $food)
    {
        Food::destroy($id);
    }


    public function random(){
        $randomFood = Food::all()->random(1);
        return response()->json($randomFood, 201);
    }

}
