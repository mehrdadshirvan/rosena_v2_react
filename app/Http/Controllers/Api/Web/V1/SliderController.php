<?php

namespace App\Http\Controllers\Api\Web\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Web\V1\SliderResource;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        return SliderResource::collection(Slider::all());
    }
}
