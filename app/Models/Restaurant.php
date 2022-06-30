<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'phone',
        'email',
        'working_hours',
        'location',
        'image'
    ];

    public function food(){
        return $this->hasMany(Food::class);
    }

    public function workpeople(){
        return$this->hasMany(Workpeople::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }
    public function categories(){
        return $this->belongsToMany(Category::class);
    }

    public function users(){
        return $this->belongsToMany(User::class)->withPivot(['score','watchlist']);
    }

    public function scores(){
        return $this->belongsToMany(Score::class);
    }

    public function favorites(){
        return $this->belongsToMany(Favorite::class);
    }
}
