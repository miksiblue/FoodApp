@if(count((array)$replies))
    @foreach ($replies as $comment)
        <div style="padding-bottom: 20px">
            <p class="text-gray-700 dark:text-gray-400"><b>   {{$comment->user->name}}  </b> {{$comment->created_at}}
            </p>

        </div>
        <p class="text-gray-700 dark:text-gray-400"> {{$comment->body}}</p>
        <form method="post" action="/comments/reply/{{$comments->id}}">
            @csrf
            <div class="form-group">
                <input
                    style="    --tw-border-opacity: 1;
    border-color: rgb(75 85 99 / var(--tw-border-opacity));
    margin-top: 0.25rem;
    border-width: 1px;
    border-radius: 0px;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    --tw-shadow: 0 0 #0000;
    width: 100%"
                    type="text" name="body" class="form-control"/>
                <input type="hidden" name="reply_id" value="{{ $comment->id }}"/>
                <input type="hidden" name="commentable_id" value="{{$comment->commentable_id}}"/>
                <input type="hidden" name="commentable_type" value="App\Models\Restaurant"/>
                <input type="hidden" name="user_id" value="{{auth()->user()->id}}"/>

            </div>
            <div class="form-group">
                <input type="submit" class="text-gray-700 dark:text-gray-400" value="Reply"/>
            </div>
        </form>
        <div style="padding-left: 100px ;padding-top: 10px">
            @include('admin.comment.child-comment-list-restaurant',['comments'=>$comment->replies])
        </div>
    @endforeach @endif
