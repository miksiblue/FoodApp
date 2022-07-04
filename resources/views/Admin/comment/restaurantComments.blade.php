<div style="

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-image:url({{'https://images.squarespace-cdn.com/content/v1/5c0ed9a3f93fd4e41d0dcd82/1554384014944-IC20AT9ZIK3C50R87K7C/WBC_4469.jpg?format=1000w'}}) ;
    ">


    <div style="width:400px;margin-left:auto;margin-right:auto">
        <h1 style="color:white;font-size:70px;font-weight:700;line-height:1.2;max-width:92%;background:rgba(0,0,0,0.33);box-sizing: border-box;padding: 30px 30px;
                            z-index: 1;font-family: serif"><b>TastyFood</b></h1>
    </div>


</div>

<a style="margin-left: 40px" href="http://127.0.0.1:8000/dashboard">All restaurants</a>

<div style="
            display: flex;
            flex-direction: row;
            justify-content: center; padding-bottom: 20px;
            background:white;
            padding-top:30px;
            font-family: serif;
            font-style: italic;
            font-size: 17px;
            padding-bottom: 60px;
        ">


    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Comments for {{$comments->name}} Retstaurant
    </h2>
</div>

<div class="py-12" style="margin-left: 30%;    margin-right: 5%">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" style="margin-right:40%">


        <form action="/comments/store1/{{$comments->id}}" method="post">
            <div class="card-body">
                    <textarea
                        style="width: 100%"
                        name="body" id="" cols="90" rows="10"></textarea>
                <br>
                <button type="submit" class="btn btn-dark"> Add comment</button>
            </div>
            @csrf
        </form>

        <div class="container col-8" style="padding-top: 50px; padding-bottom: 50px">
            <div class="row justify-content-center col-8">
                <strong class="text-gray-700 dark:text-gray-400">ALL COMMENTS</strong>
            </div>
        </div>


        @foreach($comments->comments as $comment)
            <div>
                <div style="padding-bottom: 20px">
                    <p class="text-gray-700 dark:text-gray-400">
                        <b>   {{$comment->user->name}}  </b> {{$comment->created_at}}</p>

                </div>

                <p class="text-gray-700 dark:text-gray-400"> {{$comment->body}}</p>

                <form method="post" action="/comments/reply1/{{$comments->id}}">
                    @csrf
                    <div class="form-group">

                        <input
                            style="    --tw-border-opacity: 1;border-color: rgb(75 85 99 / var(--tw-border-opacity));margin-top: 0.25rem;border-width: 1px;border-radius: 0px;padding-top: 0.5rem;padding-right: 0.75rem;padding-bottom: 0.5rem;padding-left: 0.75rem;--tw-shadow: 0 0 #0000;width: 100%"
                            type="text" name="body" class="form-control"/>
                        <input type="hidden" name="reply_id" value="{{ $comment->id }}"/>
                        <input type="submit" class="text-gray-700 dark:text-gray-400" value="Reply"
                        />
                    </div>

                </form>


                <div style="padding-left: 100px ;padding-top: 10px">

                    <p>   @include('admin.comment.comment-list-restaurant',['replies'=>$comment->replies])  </p>

                </div>


            </div>
        @endforeach
    </div>
</div>
</div>




