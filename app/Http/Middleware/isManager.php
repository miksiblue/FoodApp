<?php

namespace App\Http\Middleware;

use App\Models\Order;
use App\Models\Restaurant;
use App\Models\Workpeople;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class isManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {


        if (Auth::check() && Auth::user()->userrole_id===4) {

            return $next($request);
        }
        abort(403);
    }
}
