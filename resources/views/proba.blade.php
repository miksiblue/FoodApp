{{$dan->day}}
{{$dan->month}}
<br>

{{$user->created_at->day}}
{{$user->created_at->month}}


@foreach($users as $user)
    {{$user->name}}
@endforeach
