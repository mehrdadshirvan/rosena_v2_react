<?php

namespace App\Constants;
class RoleConstant
{

    const OWNER = 'owner';
    const SUPER_ADMIN = 'superAdmin';
    const ADMIN       = 'admin';
    const OPERATOR       = 'operator';

    const USER      = 'user';
    const DOCTOR      = 'doctor';

    const ROLES = [
        self::OWNER,
        self::SUPER_ADMIN,
        self::ADMIN,
        self::OPERATOR,
        self::USER,
    ];

    const OPERATORS_ROLES = [
        self::OWNER,
        self::SUPER_ADMIN,
        self::ADMIN,
        self::OPERATOR,
    ];


    const USER_ROLES = [
        self::DOCTOR,
        self::USER,
    ];
}
