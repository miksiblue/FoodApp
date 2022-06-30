<?php

namespace App\Models;

use App\Scopes\ActiveScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Scope;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'price',
        'user_id',
        'active',
        'restaurant_id'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');

    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class, 'restaurant_id');

    }
//local
    public function food()
    {
        return $this->belongsToMany(Food::class);
    }

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    //global
    protected static function boot()
    {

        parent::boot();

        static::addGlobalScope(new ActiveScope);
//        static::addGlobalScope('active', function (Builder $builder) {
//            $builder->where('active', 1);
//        });
    }
}
