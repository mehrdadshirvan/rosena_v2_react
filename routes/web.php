<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[HomeController::class,'index']);

Route::prefix('/pages')->group(function(){
    Route::get('/about-us',[HomeController::class,'aboutUs']);
    Route::get('/contact-us',[HomeController::class,'contactUs']);
    Route::get('/faq',[HomeController::class,'faq']);
    Route::get('/rules',[HomeController::class,'rules']);
    Route::get('/privacy-and-security',[HomeController::class,'privacyAndSecurity']);
    Route::get('/return-product',[HomeController::class,'returnProduct']);
});

Route::get('/products/{code}/{slug}',[\App\Http\Controllers\Web\ProductController::class,'show']);



Route::get('/profile/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/panel.php';
