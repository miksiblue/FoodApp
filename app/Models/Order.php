<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable=[
        'address',
        'price',
        'user_id'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');

    }

    public function food(){
        return $this->belongsToMany(Food::class);
    }
}
