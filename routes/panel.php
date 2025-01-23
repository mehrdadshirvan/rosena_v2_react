<?php

use Illuminate\Support\Facades\Route;



Route::prefix('/panel')->middleware('admin')->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\Panel\DashboardController::class,'index']);
    Route::resource('/users', \App\Http\Controllers\Panel\UserController::class)->names('panel.users');
    Route::resource('/products', \App\Http\Controllers\Panel\ProductController::class)->names('panel.products');
    Route::resource('/roles', \App\Http\Controllers\Panel\RoleController::class)->names('panel.products');
});
