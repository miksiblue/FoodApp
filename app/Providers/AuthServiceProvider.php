<?php

namespace App\Providers;

use App\Models\Order;
use App\Models\User;
use App\Policies\OrderPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Order::class=>OrderPolicy::class
    ];


    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('access-orders',function (User $user){
            return $user->userrole_id===3 || $user->userrole_id===4;
        });

        Gate::define('access-create',function (User $user){
            return $user->userrole_id===2 ;

        });
        Gate::define('access-staff',function (User $user){
            return $user->userrole_id===4 ;

        });
    }
}
