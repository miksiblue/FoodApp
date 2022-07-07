<?php

namespace App\Jobs;

use App\Mail\NewRestaurantMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class RestaurantMailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public $restaurant;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($restaurant)
    {
        $this->restaurant=$restaurant;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        sleep(10);
        Mail::to('test@gmail.com')->send(new NewRestaurantMail($this->restaurant));
    }
}
