<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTopProductToWomenMenKidsAccessoriesTables extends Migration
{
    public function up()
    {
        Schema::table('women_products', function (Blueprint $table) {
            $table->boolean('top_product')->default(false);
        });

        Schema::table('men_products', function (Blueprint $table) {
            $table->boolean('top_product')->default(false);
        });

        Schema::table('kids_products', function (Blueprint $table) {
            $table->boolean('top_product')->default(false);
        });

        Schema::table('accessories_products', function (Blueprint $table) {
            $table->boolean('top_product')->default(false);
        });
    }

    public function down()
    {
        Schema::table('women_products', function (Blueprint $table) {
            $table->dropColumn('top_product');
        });

        Schema::table('men_products', function (Blueprint $table) {
            $table->dropColumn('top_product');
        });

        Schema::table('kids_products', function (Blueprint $table) {
            $table->dropColumn('top_product');
        });

        Schema::table('accessories_products', function (Blueprint $table) {
            $table->dropColumn('top_product');
        });
    }
}
