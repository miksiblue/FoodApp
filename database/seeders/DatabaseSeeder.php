<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Food;
use App\Models\Ingredient;
use App\Models\Restaurant;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $food=  Food::create([
            'name'=>'Chicken pasta',
            'description'=>'opis hrane',
            'image'=>'public/RtWBDh3Ez08L82VgZDQOc0mE3QEAod6Pe65EZYSO.jpg',
            'price'=>'300',
            'restaurant_id'=>1,


        ]);
        $food=  Food::create([
            'name'=>'Chicken pasta',
            'description'=>'opis hrane',
            'image'=>'public/RtWBDh3Ez08L82VgZDQOc0mE3QEAod6Pe65EZYSO.jpg',
            'price'=>'300',
            'restaurant_id'=>1

        ]);
        $food=  Food::create([
            'name'=>'Chicken pasta',
            'description'=>'opis hrane',
            'image'=>'public/slika.jpg',
            'price'=>'300',
            'restaurant_id'=>1

        ]);
        $food=  Food::create([
            'name'=>'Chicken pasta',
            'description'=>'opis hrane',
            'image'=>'storage/app/public/slika.jpg',
            'price'=>'300',
            'restaurant_id'=>1

        ]);
        $food=  Food::create([
            'name'=>'Chicken pasta',
            'description'=>'opis hrane',
            'image'=>'upolads/downolad.jfif',
            'price'=>'300',
            'restaurant_id'=>1

        ]);

        $restaurant=Restaurant::create([
            'name'=>'Cezar',
            'phone'=>'834279832740'
        ]);
        $restaurant=Restaurant::create([
            'name'=>'XO pizza',
            'phone'=>'834279832740'
        ]);
        $restaurant=Restaurant::create([
            'name'=>'Tron',
            'phone'=>'8342798327'

        ]);

        $category=Category::create([
            'category'=>'Grill',
        ]);
        $category=Category::create([
            'category'=>'Pizza',
        ]);
        $category=Category::create([
            'category'=>'Mexican',
        ]);
        $category=Category::create([
            'category'=>'Fish',
        ]);
        $category=Category::create([
            'category'=>'Healty',
        ]);
        $category=Category::create([
            'category'=>'Pasta',
        ]);
        $category=Category::create([
            'category'=>'Sweets',
        ]);
        $category=Category::create([
            'category'=>'Risotto',
        ]);
        $ingredient=Ingredient::create([
            'ingredient'=>'Pelat',
        ]);
        $ingredient=Ingredient::create([
            'ingredient'=>'Maslinovo ulje',
        ]);
        $ingredient=Ingredient::create([
            'ingredient'=>'Mocarala',
        ]);
        $ingredient=Ingredient::create([
            'ingredient'=>'Kulen',
        ]);
        $ingredient=Ingredient::create([
            'ingredient'=>'Šampinjoni',
        ]);

    }
}
