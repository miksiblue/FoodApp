<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Scopes\ActiveScope;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {

        $orders = Order::where('restaurant_id', auth()->user()->workpeople->restaurant_id)->get();

        return view('admin.orders.index', compact('orders'));

    }

    public function show($id)
    {

        $order = Order::with('food.ingredients')->find($id);//->withoutGlobalScope(ActiveScope::class)
        $this->authorize('view', $order);

        return view('admin.orders.show', compact('order'));
    }

    public function showAllOrders(){

        $orders = Order::where('restaurant_id', auth()->user()->workpeople->restaurant_id)->withoutGlobalScope(ActiveScope::class)->get();
        return view('admin.orders.allOrders',compact('orders'));
    }

    public function update(Request $request, $id)
    {
        $changeOrderStatus=Order::find($id);
        $changeOrderStatus->active='0';
        $changeOrderStatus->update();
        return back();
    }
}
