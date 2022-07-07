<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Food;
use App\Models\Restaurant;
use App\Models\Score;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\DB;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function index()
    {
        $user=auth()->user()->id;
        $restaurants=Restaurant::with('food.ingredients')->with('food.categories.food')->with('categories.food')
            ->with('users')
//            ->whereHas('users',function(Builder $q){
//             return   $q->where('user_id',3);
//            })
            ->get();

       return $restaurants;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $restaurant=Restaurant::create($request->all());

        $restaurant->image=$request->file('image')->store('products');
//        $image_upload = str_replace( "\\", '/', $image_upload);
//        $restaurant->image=str_replace("\\",'/',$restaurant->image);
//        $restaurant->image=basename($restaurant->image);
//        $staff->image = $request->file('image')->store('staff', 'public');
        $restaurant->save();

        return $restaurant;
//        $restaurant->image=$request->file('image')->store('products');
//        $restaurant->save();
//        return $restaurant;
//        return redirect()->back()->with('success', 'your message,here');


//        if(!$user || !Hash::check($fields['password'],$user->password)){
//            return \response([
//                'message'=>'No way',
//            ],401);
//        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $restaurant=Restaurant::with('food.ingredients')->with('food.categories.food')
            ->with('categories.food')
            ->with('users')
            ->find($id);


        return $restaurant;


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $restaurant=Restaurant::find($id);
        $restaurant->update($request->all());
        return $restaurant;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Restaurant::destroy($id);
    }



    public function addOrRemuveFavorite(){

//        $user=auth()-user()->id;

        $r=DB::table('restaurant_user')->get();

//        $korisnici=User::all();
//        $korisnik=auth()->user()->id;
//        $proba=User::with('restaurants',)->where('id',3)->whereHas('restaurants',function (Builder $query) {
//            $query->where('restaurant_id', 35);
//        })->find($korisnik);
        return $r;

//        $proba=User::with('restaurants',)->where('id',3)->whereHas('restaurants',function (Builder $query) {
//            $query->where('restaurant_id', 35);
//        })->get();

//        $r=DB::table('restaurant_user')->where('user_id',13)->where('restaurant_id',2)->get();
    }

    public function ocena($id){



        $ocene1=DB::table('restaurant_user')->where('restaurant_id','=',$id)->sum('score');
        $svi=DB::table('restaurant_user')->where('restaurant_id','=',$id)->count('user_id');

        $ocene=$ocene1/$svi;

//        $promenljiva=bcdiv();

        return $ocene;



}

public function storeScore(Request $request,User $user,Restaurant $restaurant){


//    $restaurant=Score::create($request->all());
//
//    $restaurant->user_id=auth()->user()->id;
//    //    $restaurant->user_id=3;
//    $restaurant->restaurant_id=3;
//
//    $input['score'] = $request->input('score');
//
//    $restaurant->save();
//
//
//    return $restaurant;


    $korisnik=auth()->user();
    $input['restaurant_id'] = $request->input('restaurant_id');
    $k=$korisnik->restaurants()->where('restaurant_id',$input['restaurant_id'])->get();

    if($k->isEmpty()){

        $a=auth()->user()->id;
    $input['score']=$request->input('score');
    $input['restaurant_id']=$request->input('restaurant_id');
    $restaurant->users()->syncWithoutDetaching([
        $a=>['score'=>$input['score'],'restaurant_id'=>$input['restaurant_id']]
    ]);
        return \response('create');
    }
    else{

        $user=auth()->user()->id;
        $input['score']=$request->input('score');
        $input['restaurant_id'] = $request->input('restaurant_id');
        $restaurant=DB::table('restaurant_user')->where(['user_id' => $user , 'restaurant_id' => $input['restaurant_id']])
            ->update(['score'=>  $input['score']]);
        return \response('Updated');




    }



}

public function orderScore(){

    $ocena=DB::table('restaurants')
        ->join('restaurant_user' , 'restaurants.id' ,'=' , 'restaurant_user.restaurant_id')
        ->select('restaurants.name','restaurants.image', \DB::raw('avg(score) as avg'))
        ->groupBy('restaurants.name','restaurants.image')

        ->orderByDesc('score')
        ->get();

    return $ocena;
}

public function filter(){


    $orderByName=DB::table('restaurants')->orderBy('name')->get();


//$orderByCategory=Restaurant::with('categories')->whereHas('categories',function (Builder $query){
//    $query->where('id',2);
//})->get();

$orderByCategory=Category::with('food')->get();

        $orderByScore=DB::table('restaurants')
        ->join('restaurant_user' , 'restaurants.id' ,'=' , 'restaurant_user.restaurant_id')
        ->select('restaurants.name','restaurants.image','restaurants.id', \DB::raw('avg(score) as avg'))
        ->groupBy('restaurants.name','restaurants.image','restaurants.id')
        ->orderByDesc('score')
        ->get();

        $orderBySale=Restaurant::with('food')->whereHas('food',function(Builder $b){
            $b->where('sale','!=',null);
        })->get();


    return \Response::json(['orderByName' => $orderByName,
        'orderByScore' => $orderByScore,'orderByCategory'=>$orderByCategory,'orderBySale'=>$orderBySale
    ]);
}

public function filterCategories(){

    $orderByCategory=Restaurant::with('categories')->get();

    return $orderByCategory;
}

public function search($key){

        return Restaurant::where('name','like', "%{$key}%")->get();
}


public function proba(Request $request){



        $food=Food::all();
        $proba=Food::with('categories')->where('id',44)->get();


    return \Response::json(['food' => $food,
        'proba' => $proba
    ]);
}

    public function proba2($key){

        $proba=Food::with('categories')->where('id',$key)->get();

        return $proba;
    }

    public function probaInput(Request $request){

        $name=$request->input('name');
        $proba=Food::with('categories')->where('name',$name)->get();

        return $proba;
    }


public function showComments($id){

    $comments=Restaurant::with('comments.replies')->with('comments.user')->find($id);

        return view('admin.comment.restaurantComments',compact('comments'));
}

}
