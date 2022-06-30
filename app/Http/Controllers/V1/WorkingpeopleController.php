<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Favorite;
use App\Models\Food;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\Score;
use App\Models\User;
use App\Models\Workpeople;
use DeprecationTests\Foo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Builder;


class WorkingpeopleController extends Controller
{

    public function index(Restaurant $restaurant,Request $request)
    {


        $user=  auth()->user();

        $workpeople=Workpeople::where('user_id','=',$user->id)->get();

        foreach ($workpeople as $w){
        $restoran=Restaurant::where('id','=',$w->restaurant_id)->with('orders')->get();

        }


        $user1=auth()->user()->id;
        $workpeople1=Workpeople::where('user_id','=',$user1)->get();
        foreach ($workpeople1 as $w){
            $sacuvajRestoran=Restaurant::where('id','=',$w->restaurant_id)->get();


        }



        $favorites=User::with('restaurants')->find(3);



        $r=DB::table('restaurant_user')->where('user_id',13)->where('restaurant_id',2)->get();
        $proba=User::with('restaurants',)->where('id',3)->whereHas('restaurants',function (Builder $query) {
            $query->where('restaurant_id', 35);
            })->get();


        $restaurants=Restaurant::with('food.ingredients')->with('food.categories.food')->with('categories.food')
            ->with('users')->whereHas('users',function(Builder $q){
                $q->where('user_id',3);
            })
            ->get();



//      $averageFilmScoreJoin=DB::table('films')
//            ->join('film_user' , 'films.id' ,'=' , 'film_user.film_id')
//            ->select('films.naziv','films.opis','film_id', \DB::raw('avg(score) as avg'))
//            ->groupBy('films.naziv','film_id','films.opis')
//            ->orderByDesc('score')
//            ->get();






//        $ocene1=DB::table('scores')->where('restaurant_id','=',$id)->sum('score');
//        $svi=DB::table('scores')->where('restaurant_id','=',$id)->count('user_id');
//
//        $ocene=$ocene1/$svi;

        $ocena1=DB::table('restaurant_user')->where('restaurant_id',2)->sum('score');




$akcija=Restaurant::with('food')->whereHas('food',function(Builder $b){
    $b->where('sale','!=',null);
})->get();


//$korisnik=Auth::user();
$korisnik1=Auth::user()->roles;

$korisnik2=$korisnik1->first();
//$korisnik=$korisnik2->name;

//$korisnik=Auth::user()->roles->where('name','menadzer')->first()->name;
//$korisnik=Auth::user()->roles->where('name','menadzer')->pluck('name');
//$korisnik=Auth::user()->isAdmin();

$korisnik=1;

//            $ljudi = auth()->user();
////        $workpeople = Workpeople::where('user_id', '=', $ljudi->id)->get();
////
////        foreach ($workpeople as $w) {
////            $ordersActive1 = Restaurant::where('id', '=', $w->restaurant_id)->with('orders')->get();
////
////            foreach ($ordersActive1 as $o) {
////                $ordersActive = Order::where('restaurant_id', '=', $o->id)->with('food')->get();
///

//        $workPeople=Workpeople::where('user_id','=',Auth::id())->first()->restaurant_id;


        $najdiZaposlenog=Workpeople::where('user_id','=',Auth::id())->first()->restaurant_id;



$restoranUkomRadi=Restaurant::where('id',$najdiZaposlenog)->first()->id;





//$workPeople=Order::where('restaurant_id',$restoranUkomRadi)->get();


        $food=Food::all();

        $workPeople=Auth::user()->workpeople->restaurant_id;

        $andjela=\auth()->user()->workpeople->restaurant->id;
        return view('proba',compact('akcija','korisnik','workPeople','andjela','food'));
    }

    public function permisijaZaPrikazNarudzbina(){

        $restaurant=Restaurant::all();
    }


    public function addOrRemuveFavorite(){

        $proba=User::with('restaurants',)->where('id',3)->whereHas('restaurants',function (Builder $query) {
            $query->where('restaurant_id', 35);
        })->get();

//        $r=DB::table('restaurant_user')->where('user_id',13)->where('restaurant_id',2)->get();
    }

    public function store(Request $request){

        $user=auth()->user()->id;

        $workingPeople=new Workpeople();
        //$workingPeople=Workpeople::create($request->all());

        $workingPeople->salary=$request->input('salary');
        $workingPeople->shift=$request->input('shift');

        $korisnik=Workpeople::where('user_id',$user)->get();

        foreach ($korisnik as $k){

            $workingPeople->restaurant_id=$k->restaurant_id;

        }

        $input['user_id'] = $request->input('user_id');

        $user2=User::where('email',$input['user_id'])->get();

        foreach ($user2 as $u){
            $workingPeople->user_id=$u->id;
        }

        $workingPeople->save();
//$workingPeople->restaurant=Workpeople::where('user_id',$user)->get('restaurant_id');

    }

    public function allStaff(){


        $user=auth()->user()->id;
        $zaposleni=Workpeople::where('user_id',$user)->get();

        foreach ($zaposleni as $z){


            $allStaff=Workpeople::with('user.roles')->where('restaurant_id',$z->restaurant_id)->get();
            return $allStaff;
        }

      //  $allStaff=Workpeople::where('user_id',3)->get();
//        $allStaff=Workpeople::with('user')->where('restaurant_id',)->get();
//        return $allStaff;
    }


    public function svi(){

        return Auth::user();
    }


    public function refusal($id, Workpeople $workpeople){
        Workpeople::destroy($id);


    }




}
