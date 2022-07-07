@if(count((array)$comments))



    @foreach($comments as $comment)



        <div style="padding-bottom: 20px">
            <p class="text-gray-700 dark:text-gray-400"><b>   {{$comment->user->name}}  </b> {{$comment->created_at}}</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">
                {{$comment->user->userrole->role}}
            </p>
        </div>
        <p class="text-gray-700 dark:text-gray-400"> {{$comment->body}}</p>
        <form method="post" action="/comments/reply/{{$comment->commentable_id}}">
            @csrf
            <div class="form-group">
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    type="text" name="body" class="form-control" />
                <input type="hidden" name="reply_id" value="{{ $comment->id }}"/>
                <input type="hidden" name="commentable_id" value="{{$comment->commentable_id}}"/>
                <input type="hidden" name="commentable_type" value="App\Models\Food"/>
                <input type="hidden" name="user_id" value="{{auth()->user()->id}}"/>
            </div>
            <div class="form-group">
                <input type="submit" class="text-gray-700 dark:text-gray-400" value="Reply" style="float: right"/>
            </div>
        </form>

        @if(count((array)$comment->replies))
            <div style="padding-left: 100px ;padding-top: 10px">
            @include('admin.comment.child-comment-list',['comments'=>$comment->replies])
</div>
        @endif
    @endforeach

@endif
