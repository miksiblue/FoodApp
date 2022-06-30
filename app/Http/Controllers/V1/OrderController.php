<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Food;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\User;
use App\Models\Workpeople;
use App\Scopes\ActiveScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function __construct(){

      //  $this->middleware('vezba')->except('sredina'); //sve sem sredina
     //   $this->middleware('vezba')->only('sredina'); //samo sredina
        //$this->middleware('isAdmin')->only('sredina'); //samo sredina
        $this->middleware('isManager')->only('sredina'); //samo sredina

    }

    public function index()
    {

        $orders=Order::with('food')->withoutGlobalScope(ActiveScope::class)->get();


        return response()->json($orders, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $storeOrder = Order::create($request->all());

        $input['food'] = $request->input('food');
        $input['restaurant_id']=$request->input('restaurant_id');
        $storeOrder->restaurant_id=$input['restaurant_id'];
        $storeOrder->save();
        $storeOrder->food()->attach($input['food']);


//dodaj ovo ispod

        foreach ($storeOrder->food as $f){
            if($f->sale === null){
                $storeOrder->price=$storeOrder->food->sum('price');
            }
            else{
               $f->price=$f->sale;
                $storeOrder->price=$storeOrder->food->sum('price');
            }
        }

//        $storeOrder->price=$storeOrder->food->sum('price');
//        $storeOrder->restaurant_id=1;
        $storeOrder->user_id=auth()->user()->id;
        $storeOrder->address=auth()->user()->address;

        $storeOrder->save();
//    return redirect('/dashboard');
return back();
    }





    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

      //  $user=auth()->user();
    //    $workPeople=Auth::user();

//        dd($workPeople);

        $order=Auth::user();
      // $order=Order::where('restaurant_id',35)->find($id);

       return $order;



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
        $changeOrderStatus=Order::find($id);
        $changeOrderStatus->active='0';
        $changeOrderStatus->update();
        return $changeOrderStatus;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($cart_id)
    {
        Order::destroy($cart_id);
    }

    public function activeOrders()
    {


        $ljudi = auth()->user();
        $workpeople = Workpeople::where('user_id', '=', $ljudi->id)->get();

        foreach ($workpeople as $w) {
            $ordersActive1 = Restaurant::where('id', '=', $w->restaurant_id)->with('orders')->get();

            foreach ($ordersActive1 as $o) {
                $ordersActive = Order::where('restaurant_id', '=', $o->id)->with('food')->get();
            }
        }


        return response()->json($ordersActive, 201);
    }


    public function sredina(){

//$this->authorize('view');
        $sve=Restaurant::all('id');
        return response()->json($sve,200);
    }




}
