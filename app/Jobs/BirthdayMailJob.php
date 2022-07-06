<?php

namespace App\Jobs;

use App\Mail\BirthdayMail;
use App\Mail\NewRestaurantMail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class BirthdayMailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $day=Carbon::now()->day;
        $month=Carbon::now()->month;
        $users=User::whereDay('created_at',$day)->whereMonth('created_at',$month)->get();
        foreach($users as $user)
           Mail::to($user->email)->send(new BirthdayMail($user));

    }
}
