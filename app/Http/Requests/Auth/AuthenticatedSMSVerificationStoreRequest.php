<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthenticatedSMSVerificationStoreRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        if ($this->has('mobile')){
            $this->replace(['mobile'=> ltrim($this->get('mobile'),'0')]);
        }
    }

    /**
     * if user google recaptcha uncomment g-recaptcha-response validation
     * @return string[]
     */
    public function rules()
    {
        return [
            'mobile' => 'required|numeric|max:9999999999',
            //'t' => 'required|in:' . generateHash(),
            //'g-recaptcha-response' => [(app()->environment('testing') ? 'nullable' : 'required'),'recaptcha'],
        ];

    }
}
