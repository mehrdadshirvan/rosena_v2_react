<?php

namespace App\Http\Controllers\Auth;

use App\Constants\UserConstant;
use App\Constants\VerificationCodeConstant;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Models\VerificationCode;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $auth = User::where('mobile', $request->only('mobile'))->value('id');

        $verification_code = VerificationCode::query()
            ->where(['user_id' => $auth, 'type' => VerificationCodeConstant::TYPE_SMS])
            ->orderBy('id', 'DESC')->first();

        if ($verification_code && $verification_code->expired_at > Carbon::now() && $verification_code->expired_at <= Carbon::now()->addMinutes(2) && $request->get('verification_code') == $verification_code->code) {
            $request->authenticate();

            $request->session()->regenerate();

            $userType = Auth::user()->type;
            if (in_array($userType,UserConstant::TYPE_OPERATORS_ROLES)) {
                return redirect()->intended(url('/panel/dashboard'));
            } else if (in_array($userType, [UserConstant::TYPE_USER])) {
                return redirect()->intended(url('/'));
            } else {
                return redirect()->intended(url('/'))->with('server_messages','Unauthorized');
            }
        }
        return $this->destroy($request);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
