<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Role;
use App\Models\Favorite;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\User;
use App\Models\Workpeople;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;
use App\Scopes\ActiveScope;

class AuthController extends Controller
{

    public function  findLoginPerson(User $user){
      //  $user=auth()->user()->id;
       $user=Auth::id();
        return $user;

    }

    public function favoriteRestaurant(User $user){

        $user=auth()->user();
//        $favoriteRestaurant=User::with('restaurants.categories')->find($user);  //radjeno bez pivot watchlist



        $k=$user->restaurants()->wherePivot('watchlist',1)->with('categories')->get();
        return $k;
    }

    public function storeFavoriteRestaurant(Restaurant $restaurant,User $user, Request $request){

        $korisnik=auth()->user();
        $user=auth()->user()->id;

        $input['restaurant_id'] = $request->input('restaurant_id');

        $k=$korisnik->restaurants()->where('restaurant_id',$input['restaurant_id'])->get();

        if($k->isEmpty()){
            $insertFavoriteRestaurant=DB::table('restaurant_user')->insert(['user_id' => $user , 'restaurant_id' => $input['restaurant_id'],'watchlist'=>1]);
            return back();

//            return \response('Updated');
        }
        else{
//            $insertFavoriteRestaurant=DB::table('restaurant_user')->insert(['user_id' => $user , 'restaurant_id' => $input['restaurant_id'],'watchlist'=>1]);
            $insertFavoriteRestaurant=DB::table('restaurant_user')->where(['user_id' => $user , 'restaurant_id' => $input['restaurant_id']])
                ->update(['watchlist'=>1]);
            return back();
        }

//$insertFavoriteRestaurant=DB::table('restaurant_user')->insert(['user_id' => $user , 'restaurant_id' => $input['restaurant_id'],'watchlist'=>1]);
//
//return \response('Favorite restaurant added');

    }

    public function deleteFavoriteRestaurant(Restaurant $restaurant,User $user, Request $request){


        $user=auth()->user()->id;

        $input['restaurant_id'] = $request->input('restaurant_id');

        $insertFavoriteRestaurant=DB::table('restaurant_user')->where(['user_id' => $user , 'restaurant_id' => $input['restaurant_id']])
            ->update(['watchlist'=>0]);



return back();

    }

    public function findUser(User $user,Request $request){


        $user=User::find(3);
//        $user=auth()->user()->id;
//        $workpeople=Workpeople::where('user_id','=',$user)->with('user.roles')->with('restaurant')->get();

     //   dd($workpeople);

//        $rola=Role::with('users')->where()->get();
//        $user->with('role');
//        $a = auth()->user()->role->name;
//        $a = auth()->user()->id;
//        $a=auth()->user();
//        $a=User::find('id',3);

return $user;
    }

    public function register(Request $request){
        $fields=$request->validate([
            'name'=>'required|string',
            'email'=>'required|string|unique:users,email',
            'password'=>'required|string|confirmed',
            'address'=>'required|string'
        ]);

        $user=User::create([
            'name'=>$fields['name'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'address'=>'dsadasads'
        ]);

        $token=$user->createToken('myapptoken')->plainTextToken;

        $response=[
            'user'=>$user,
            'token'=>$token
        ];
            return response($response,201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        auth()->logout();
//        return [
//            'message'=>'Logged out'
//        ];
        return redirect('/login');
    }


    public function login(Request $request){
        $fields=$request->validate([
            'email'=>'required|string',
            'password'=>'required|string',
        ]);
//check email
        $user=User::where('email', $fields['email'])->first();
//check password
        if(!$user || !Hash::check($fields['password'],$user->password)){
            return \response([
              'message'=>'No way',
            ],401);
        }


        $token=$user->createToken('myapptoken')->plainTextToken;

        $response=[
            'user'=>$user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function userProfile(){


        $user=auth()->user();
        $userOrder=Order::with('restaurant','food')->withoutGlobalScope(ActiveScope::class)->where('user_id',$user->id)->get();
        return ['user'=>$user,'userOrder'=>$userOrder];
    }

}
