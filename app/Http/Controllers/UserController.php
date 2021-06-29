<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();
        return response()->json($user); // send bacck json
    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user); // send bacck json
    }
    public function post(UserRequest $request){
        $request->validated();
        $request->request->add(['password' => Hash::make($request->password)]);
        $user = User::create($request->all());
        return response()->json([
            'status' => true,
            "messege" => "Data user berhasil di tambahkan",
            "data" => $user
        ]);
    }
    public function edit($id){
        $id = User::find($id);
        return response()->json($id);
    }

    public function update(UserRequest $request, $id)
    {
        $request->validated();
        $request->request->add(['password' => Hash::make($request->password)]);
        $user = User::find($id)->update($request->all());
        return response()->json([
            'status' => true,
            "messege" => "Data user berhasil di update",
            "data" => $user
        ]);

    }
    public function destroy(Request $request, $id){
        User::destroy($id);
        return response()->json([
            'status' => true,
            "messege" => "Data user berhasil di hapus",
            "data" => 'berhasil'
        ]);
    }
}
