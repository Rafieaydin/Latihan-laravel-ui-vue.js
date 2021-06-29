<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i<=20 ; $i++) {
            DB::table('users')->insert([
                'name' => "joko$i",
                "email" => "joko$i@gmail.com",
                "password" => Hash::make('password')
            ]);
        }

    }
}
