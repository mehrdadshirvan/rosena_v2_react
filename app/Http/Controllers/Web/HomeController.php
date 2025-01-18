<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Web\V1\ProductSummeryResource;
use App\Http\Resources\Api\Web\V1\SliderResource;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $sliders = Slider::all();
        $products = Product::query()
            ->where(['status'=> 'accepted'])
            ->orderBy('id','DESC')
            ->limit(10)
            ->get();

        $return = [
            'sliders' => SliderResource::collection($sliders),
            'products' => ProductSummeryResource::collection($products),
        ];
        if($request->has('json')){ return $return; }
        return Inertia::render('Web/HomePage/HomePage', $return);
    }

    public function aboutUs()
    {
        return Inertia::render('Web/Pages/AboutUs');
    }
    public function contactUs()
    {
        return Inertia::render('Web/Pages/ContactUs');
    }
    public function faq()
    {
        return Inertia::render('Web/Pages/FAQ');
    }
    public function rules()
    {
        return Inertia::render('Web/Pages/Rules');
    }
    public function privacyAndSecurity()
    {
        return Inertia::render('Web/Pages/PrivacyAndSecurity');
    }
    public function returnProduct()
    {
        return Inertia::render('Web/Pages/ReturnProduct');
    }
}
