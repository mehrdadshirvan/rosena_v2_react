<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class EmailVerificationRequest extends FormRequest
{
    protected function prepareForValidation()
    {

    }

    public function rules()
    {
        $user = $this->user();
        return [
            'email' => 'required|email|min:3|max:75|unique:users,email,'.$user->id,
        ];
    }
}
