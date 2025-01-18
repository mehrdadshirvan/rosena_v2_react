<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('auth');
//        parent::__construct();
//    }

    public function index()
    {
        return Inertia::render('Panel/Dashboard/Dashboard', []);
    }
}
