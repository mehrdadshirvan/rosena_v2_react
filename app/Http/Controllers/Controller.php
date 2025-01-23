<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected $feature = '';

    public function __construct()
    {
        if(!empty($this->feature)){
            $this->middleware(["permission:$this->feature.index"])->only(['index']);
            $this->middleware(["permission:$this->feature.show"])->only(['show']);
            $this->middleware(["permission:$this->feature.store"])->only(['store']);
            $this->middleware(["permission:$this->feature.update"])->only(['update']);
            $this->middleware(["permission:$this->feature.destroy"])->only(['destroy']);
        }
    }

}
