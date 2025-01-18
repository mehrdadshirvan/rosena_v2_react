<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Web\V1\SliderResource;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $sliders = Slider::all();
        $return = [
            'sliders' => SliderResource::collection($sliders),
        ];
        if($request->has('json')){ return $return; }
        return Inertia::render('Web/HomePage/HomePage', $return);
    }


    public function show($code,$slug,Request $request)
    {
        $data = Product::where(
            ['code'=>$code],
            ['name_url'=>$slug]
        )->firstOrFail();
        return Inertia::render('Web/Product/SingleProductPage', ['data'=>$data]);
    }
}
