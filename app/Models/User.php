<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'userrole_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles(){
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    public function restaurants(){
        return $this->belongsToMany(Restaurant::class)->withTimestamps()->withPivot(['score','watchlist']);
    }

    public function score(){
        return $this->belongsToMany(Score::class)->withTimestamps();
    }

    public function assignRole($role){
        $this->roles()->sync($role, false);
    }

    public function abilities(){
        return $this->roles->map->abilities->flatten()->pluck('name')->unique();
    }

public function workpeople(){
        return $this->hasOne(Workpeople::class);
}

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function favorites(){
        return $this->belongsToMany(Favorite::class);
    }

    public function userrole(){
        return $this->belongsTo(Userrole::class);
    }

}
