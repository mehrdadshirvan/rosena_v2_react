<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\LogOptions;

/***
 * @property string role
 * @property string email
 * @property string mobile
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    public function columns($columns = []): array
    {
        $columns = [
            'uuid',
            'name',
            'email',
            'email_verified_at',
            'mobile',
            'mobile_verified_at',
            'password',
            'type',
            'avatar',
            'is_active',
            'cart_number',
        ];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    protected $appends = ['avatar_url'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    public function getAvatarUrlAttribute(): null|string{
        return !empty($this->avatar) ? url($this->avatar) : null;
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param string $keyword
     * @param array  $columns
     *
     * @return Builder
     */
    public static function WhereLike($keyword = '', $columns = ['name','mobile','email'])
    {
        return self::Filter(request())->where(function (Builder $q) use ($keyword, $columns) {
            foreach ($columns as $column) {
                $q->orWhere($column, 'LIKE', "%{$keyword}%");
            }
        });
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param       $request
     * @param array $columns
     *
     * @return Builder
     */
    public static function Filter($request, $columns = ['*'])
    {
        $q = self::query()->select($columns);
        if (!empty($request->id)) {
            $q->where('id', $request->id);
        }
        if (!empty($request->gender)) {
            $q->where('gender', $request->gender);
        }
        if (!empty($request->role)) {
            $q->where('role', $request->role);
        }
        if (!empty($request->is_active)) {
            $q->where('is_active', $request->is_active);
        }
        return $q;
    }
    final public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
        // TODO: Implement getActivitylogOptions() method.
    }

}
