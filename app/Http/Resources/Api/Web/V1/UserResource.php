<?php

namespace App\Http\Resources\Api\Web\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'email_verified_at' => (boolean) $this->email_verified_at,
            'mobile' => $this->mobile,
            'mobile_verified_at' => (boolean) $this->mobile_verified_at,
            'avatar' => $this->avatar,
            'gender' => $this->gender,
            'gender_translation' => __($this->gender),
            'type' => $this->type,
            'type_translation' => __($this->type),
            'is_active' => (boolean) $this->is_active,
            'created_at' => $this->created_at,
            'created_at_jalali' => $this->created_at,
        ];
    }
}
