<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('auth');
//        parent::__construct();
//    }

    public function index(Request $request)
    {
        $data = User::Filter($request);
        $data = $data->paginate($request->get('limit',10));

        return Inertia::render('Panel/Users/Users', [
            'data' => $data,
        ]);
    }

    public function show($id)
    {
        $user = User::query()->where(['id'=>$id])->firstOrFail();
        return Inertia::render('Panel/Users/ShowUser', [
            'user' => $user
        ]);
    }
}
