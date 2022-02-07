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

//        $allDataForFood = DB::table('food')
//            ->join('category_food', 'food.id', '=', 'category_food.food_id')
//            ->select('*')
//            ->get();
//        return $allDataForFood;

      return $food;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {

        //$url = Storage::url('image');
        $food=new Food;
        $food->name=$request->input('name');
        $food->price=$request->input('price');
        $food->description=$request->input('description');
        $food->restaurant_id=$request->input('restaurant_id');
        $food->image=$request->file('image')->store('public');

        $input['category'] = $request->input('category');
        $food->categories()->attach($input['category']);
        $input['ingredient'] = $request->input('ingredient');
        $food->ingredients()->attach($input['ingredient']);
        $food->save();


//        $food = Food::create($request->all());
//        $input['category'] = $request->input('category');
//        $food->categories()->attach($input['category']);
//        $input['ingredient'] = $request->input('ingredient');
//        $food->ingredients()->attach($input['ingredient']);
//        // $this->storeImage($food);

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

    public function storeImage($food)
    {
        if (\request()->has('image')) {
            $food->update([
                'image' => \request()->image->store('app/public/upolads', 'public'),
            ]);
            $image = Image::make(public_path('storage/app/public' . $food->image))->fit(3000, 30, null, 'top-left');
            $image->save();
        }
    }

    public function random(){
        $randomFood = Food::all()->random(1);
        return $randomFood;
    }

    public function image(Food $food){


        $image = Storage::disk('public')->get('slika.jpg');
        return $image;
    }




}
