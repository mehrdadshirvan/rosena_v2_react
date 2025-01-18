<?php

namespace App\Http\Resources\Api\Web\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductSummeryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'name_url' => $this->name_url,
//            'brand' => $this->brand,
            'image' => $this->image_url,
            'url' => $this->url,
        ];
    }
}
