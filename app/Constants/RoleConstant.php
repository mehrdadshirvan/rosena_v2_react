<?php

namespace App\Constants;
class RoleConstant
{
    const SUPER_ADMIN = 'superAdmin';
    const ADMIN       = 'admin';
    const OPERATOR       = 'operator';
    const USER      = 'user';

    const ROLES = [
        self::SUPER_ADMIN,
        self::ADMIN,
        self::OPERATOR,
        self::USER,
    ];

    const OPERATORS_ROLES = [
        self::SUPER_ADMIN,
        self::ADMIN,
        self::OPERATOR,
    ];


    const USER_ROLES = [
        self::USER,
    ];
}
