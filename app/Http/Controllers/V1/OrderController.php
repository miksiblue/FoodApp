<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$orders=Order::find(9)->food; //show food for order id=9

//        $orders=DB::table('orders')         //Show all food seperatly
//            ->join('food_order','order_id','=','food_order.order_id')
//            ->join('food','food_id','=' , 'food.id')
//            ->select('food.name')
//            ->get();

        $orders=Order::all()->where('active','=','1');



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

        $storeOrder->save();
        $input['food'] = $request->input('food');
        $storeOrder->food()->attach($input['food']);

        return $storeOrder;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function destroy($id)
    {

    }
}
