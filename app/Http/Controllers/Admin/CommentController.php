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

    public function store(Request $request, Food $food,$id)
    {
        $comment = new Comment;
        $comment->body = $request->body;
        $comment->user_id=auth()->user()->id;
        $food = Food::find($id);
        $food->comments()->save($comment);
        return back();
    }

    public function reply(Request $request, Food $food,$id)
    {
        $request->validate([
            'body' => 'required'
        ]);

        $input = $request->all();

        $input['user_id'] = auth()->user()->id;
        $food = Food::find($id);
        $food->comments()->create($input);
        return back();
    }

}
