<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Food;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\User;
use App\Models\Workpeople;
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
         $food=Food::with('ingredients')->with('categories')->get();

        return response()->json($food, 201);

    }

    public function promotions()
    {

        $promotions=Food::with('restaurant')->where('sale','!=',null)->get();

        return $promotions;

    }

    public function restaurantFood(){

      $korisnik=auth()->user()->id;
        $zaposleni=Workpeople::where('user_id',$korisnik)->get();

        foreach ($zaposleni as $z){
            $restoran=Restaurant::where('id',$z->restaurant_id)->with('food')->get();
        }

//        $food=Food::all();
        return response()->json($restoran, 201);
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

//        $all = $request->all();
//        unset($all['image']);
//        $restaurant=Food::create($all);

        $restaurant=Food::create($request->all());

        $user=User::all();
        $user=auth()->user()->id;
        $workpeople=Workpeople::where('user_id','=',$user)->get();
        foreach ($workpeople as $w){
            $sacuvajRestoran=Restaurant::where('id','=',$w->restaurant_id)->get();

            foreach ($sacuvajRestoran as $r){
                $restaurant->restaurant_id=$r->id;
            }
        }
        $restaurant->image=$request->file('image')->store('products');
        $restaurant->save();

//
//
//        $food = Food::create($request->all());
//        $food->image=$request->file('image')->store('products');
//        $food->save();
//        $input['category'] = $request->input('category');
//        $food->categories()->attach($input['category']);
//        $input['ingredient'] = $request->input('ingredient');
//        $food->ingredients()->attach($input['ingredient']);
//
//
//
//        return $food;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        $this->authorize('view',Food::find($id));
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
//        $food->image=$request->file('image')->store('products');
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

    public function saleFood(Request $request,$id){
        $food = Food::find($id);




//            $broj=21.99 * 100;
//        $cena=bcdiv($broj,100,2);

        $procenat=$request->get('p');
        $racunanjeProcenta=($procenat/100)*$food->price;
        $food->sale=$food->price-$racunanjeProcenta;
        $food->update();
    }

    public function removeAction(Request $request,$id){
        $food = Food::find($id);
        $food->sale=NULL;
        $food->update();
    }

}
