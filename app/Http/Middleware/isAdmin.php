<?php

namespace App\Http\Middleware;

use App\Http\Controllers\V1\AuthController;
use App\Models\Role;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // if(Auth::id()===3) //samo moze da pristupi korisnik koji ima id 3

//        $korisinik=Auth::user();
//        $korisnik=$request->user()->roles->where('name','menadzer');;
        //$korisnik=$request->user()->roles->find('name','menadzer');
//        $proba=Auth::user()->roles->find('name','menadzer');

//        Auth::user()->roles->where('name','menadzer')->first()->name==='menadzer'

//              if(Auth::user()->roles->where('name','menadzer')->first()->name==='menadzer') {
//                      return $next($request);
//                  }
//      else{abort(403,'greska');}

        if (Auth::check() && Auth::user()->userrole_id===2) {

            return $next($request);
        }
        abort(403);


    }
}
