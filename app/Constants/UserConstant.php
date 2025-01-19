<?php

namespace App\Constants;

class UserConstant {

    const TYPE_USER = 'user';
    const TYPE_OPERATOR = 'operator';
    const TYPE_ADMINISTRATOR = 'administrator';
    const TYPE_OWNER = 'owner';

    const TYPE_OPERATORS_ROLES = [
        self::TYPE_OPERATOR,
        self::TYPE_ADMINISTRATOR,
        self::TYPE_OWNER,
    ];

    const TYPES = [
        self::TYPE_USER,
        self::TYPE_OPERATOR,
        self::TYPE_ADMINISTRATOR,
        self::TYPE_OWNER,
    ];

    const GENDER_MAN = 'male';
    const GENDER_WOMAN = 'female';
    const GENDER_OTHER = 'other';

    const GENDERS = [
      self::GENDER_MAN,
      self::GENDER_WOMAN,
    ];
}
