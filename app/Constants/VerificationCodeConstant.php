<?php

namespace App\Constants;

class VerificationCodeConstant
{
    const TYPE_SMS      = 'sms';
    const TYPE_Email      = 'email';
    const TYPES              = [
        self::TYPE_SMS,
        self::TYPE_Email,
    ];
}

