<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Workpeople;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function userInfo(){

        $user=auth()->user();
        return view('admin.dashboard',compact('user'));
    }

    public function create(){

        $user=auth()->user();
        return view('admin.staff.create',compact('user'));

    }

    public function store(Request $request){

      $korisnik=User::where('email',$request->input('email'))->get();


      foreach ($korisnik as $k){

          $workpeople=Workpeople::where('user_id',$k->id)->get();
          if($workpeople->isEmpty()){
              User::where('email',$k->email)->update(['userrole_id'=>$request->input('accountType')]);
              Workpeople::create(['user_id'=>$k->id,'restaurant_id'=>auth()->user()->workpeople->restaurant_id,'salary'=>$request->input('salary'),'shift'=>$request->input('shift')]);
          }
      }

        return back();
    }

    public function refusal($id){


        $workpeople=Workpeople::find($id);
        User::where('id',$workpeople->user->id)->update(['userrole_id'=>1]);
        Workpeople::destroy($id);

   ;
        return back();
    }

}
