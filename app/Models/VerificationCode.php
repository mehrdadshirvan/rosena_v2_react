<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\SMSVerificationCode
 *
 * @property int $id
 * @property int $user_id
 * @property int $code
 * @property string $expired_at
 */
class VerificationCode extends Model
{
    use HasFactory;
    protected $table = 'verification_codes';
    protected $guarded = [];

    public static function columns(array $array = []) : array
    {
        $columns = [
            'user_id',
            'code',
        ];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    /**
     * @return BelongsTo
     */
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }


}
