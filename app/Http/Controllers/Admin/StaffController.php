<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Workpeople;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    public function index(){
        $staff=Workpeople::with('user.userrole')->paginate(2);
        return view('admin.staff.index',compact('staff'));
    }
}
