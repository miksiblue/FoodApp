<?php

namespace App\Console;

use App\Jobs\BirthdayMailJob;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
//        $schedule->command('inspire')->hourly();
//        $schedule->call('App\Console\Kernel@imefunkcije')->dailyAt('00:00') ->evryMinute();
        $schedule->call('App\Console\Kernel@birthdayJob')->dailyAt('12:00');
//        $schedule->call('App\Console\Kernel@birthdayJob')->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }

    public function birthdayJob()
    {
        BirthdayMailJob::dispatch();
    }


}
