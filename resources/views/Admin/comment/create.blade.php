<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Comments for {{$comments->name}}
    </h2>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">


            <form action="/comments/store/{{$comments->id}}" method="post">
                <div class="card-body">
                    <textarea
                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        name="body" id="" cols="90" rows="10"></textarea>
                    <button class="text-gray-700 dark:text-gray-400" style="float:right"> Add comment</button>
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
                        <p class="text-gray-700 dark:text-gray-400"><b>   {{$comment->user->name}}  </b> {{$comment->created_at}}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400">
                            {{$comment->user->userrole->role}}
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-400"> {{$comment->body}}</p>

                    <form method="post" action="/comments/reply/{{$comments->id}}">
                        @csrf
                        <div class="form-group">

                            <input
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                type="text" name="body" class="form-control"/>
                            <input type="hidden" name="reply_id" value="{{ $comment->id }}"/>
                            <input type="submit" class="text-gray-700 dark:text-gray-400" value="Reply"
                                   style="float: right"/>
                        </div>

                    </form>


                    <div style="padding-left: 100px ;padding-top: 10px">

                        <p>   @include('admin.comment.comment-list',['replies'=>$comment->replies])  </p>

                    </div>


                </div>
            @endforeach


        </div>
    </div>
    </div>
</x-admin-layout>



