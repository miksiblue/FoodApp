<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFoodIngredientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_ingredient', function (Blueprint $table) {
            $table->primary(['ingredient_id', 'food_id']);
            $table->unsignedBigInteger('ingredient_id');
            $table->unsignedBigInteger('food_id');
            $table->timestamps();


            $table->foreign('ingredient_id')
                ->references('id')
                ->on('ingredients')
                ->onDelete('cascade');


            $table->foreign('food_id')
                ->references('id')
                ->on('food')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food_ingredient');
    }
}
