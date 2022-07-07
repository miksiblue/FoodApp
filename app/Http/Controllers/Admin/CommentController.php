<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Food;
use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    public function storeComments(Request $request,$id)
    {

        $comment=Comment::create($request->all());

        session()->flash('message','message');
        return back();
//            ->with('message','comment');
    }

    public function replyComments(Request $request,$id)
    {
        $comment=Comment::create($request->all());

        return back();
    }




}
