<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function($table)
        {
            $table->increments('id');
            $table->string('product_name');
            $table->integer('stock');
            $table->string('description')->nullable();
            $table->string('image')->nullable();
            $table->string('category');
            $table->decimal('price', 8, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('Products');
    }
};
