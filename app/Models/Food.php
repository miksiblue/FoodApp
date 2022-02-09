<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'price',
        'description',
        'image',
        'restaurant_id',
        'calories'
    ];


    public function restaurant(){
        return $this->belongsTo(Restaurant::class);
    }

    public function categories(){
        return $this->belongsToMany(Category::class);
    }

    public function ingredients(){
        return $this->belongsToMany(Ingredient::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function orders(){
        return $this->belongsToMany(Order::class);
    }

}
