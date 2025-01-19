<?php

namespace App\Http\Controllers\Auth;

use App\Constants\UserConstant;
use App\Constants\VerificationCodeConstant;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Pkg\FarazSMS\FarazSMSController;
use App\Http\Requests\Auth\AuthenticatedSMSVerificationStoreRequest;
use App\Models\VerificationCode;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;

class AuthenticatedSMSVerificationController extends Controller
{

    public function store(AuthenticatedSMSVerificationStoreRequest $request)
    {
        //check user mobile number
        $auth = User::query()->where(['mobile' => $request->get('mobile')])->first();
        if(!$auth){
            User::query()
                ->insert([
                    'mobile'=> $request->get('mobile'),
                    'uuid'=>(string) Str::uuid()->toString(),
                    'type'=> UserConstant::TYPE_USER,
                         ]);
            $auth = User::query()->where(['mobile' =>  $request->only('mobile')])->first();
        }
        if ($auth && $auth->mobile) {
            $specialUserId = [];
            if (in_array($auth->id, $specialUserId)) {
                $rand = 750817;
            } else {
                $rand = 750817;
//                $rand = rand(111111, 999999);
            }
            //check Verification code
            $check = VerificationCode::query()
                ->where(['user_id' => $auth->id,'type' => VerificationCodeConstant::TYPE_SMS])
                ->whereBetween('expired_at', [Carbon::now(), Carbon::now()->addMinutes(2)])
                ->first();

            if (!$check) {
                $save = new VerificationCode();
                $save->user_id = $auth->id;
                $save->code = $rand;
                $save->expired_at = Carbon::now()->addMinutes(2);
                $save->type = VerificationCodeConstant::TYPE_SMS;
                $save->save();
//                FarazSMSController::SendByPattern([$auth->mobile], 'LoginSendVerificationCode', ['verification-code' => $rand]);
                return response_true(true);
            }
            return response_false(['code'=>[__("Code send before")]],__("Code send before"));
        }
    }
}

