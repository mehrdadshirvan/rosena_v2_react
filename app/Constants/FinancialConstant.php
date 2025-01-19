<?php

namespace App\Constants;

class FinancialConstant {

    const TYPE_INCREASE_WALLET = 'increase_wallet';
    const TYPE_DECREASE_WALLET = 'decrease_wallet';

    const TYPES = [
        self::TYPE_INCREASE_WALLET,
        self::TYPE_DECREASE_WALLET,
    ];


    const STATUS_PENDING = 'pending';
    const STATUS_DONE = 'done';
    const STATUS_PROCESSING = 'processing';
    const STATUS_CANCELLED = 'cancelled';

    const STATUSES = [
      self::STATUS_PENDING,
      self::STATUS_DONE,
      self::STATUS_PROCESSING,
      self::STATUS_CANCELLED,
    ];
}
