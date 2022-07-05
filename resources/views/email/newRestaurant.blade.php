@component('mail::message')
# New Restaurant created


    New restaurant

Name: {{$restaurant['name']}} <br/>
Email: {{$restaurant['email']}} <br/>
Location: {{$restaurant['location']}}
@endcomponent
