<?php

namespace App\Models;

use App\Traits\HasDateTimeFields;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * Class Role
 *
 * @property int                                                    $id
 * @property string                                                 $name
 * @property string                                                 $guard_name
 * @property Carbon|null                                            $created_at
 * @property Carbon|null                                            $updated_at
 * @property-read Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null                                          $permissions_count
 * @property-read Collection|User[]                                 $users
 * @property-read int|null                                          $users_count
 * @method static Builder|Role newModelQuery()
 * @method static Builder|Role newQuery()
 * @method static Builder|Role permission($permissions)
 * @method static Builder|Role query()
 * @method static Builder|Role whereCreatedAt($value)
 * @method static Builder|Role whereGuardName($value)
 * @method static Builder|Role whereId($value)
 * @method static Builder|Role whereName($value)
 * @method static Builder|Role whereUpdatedAt($value)
 * @method static \Database\Factories\RoleFactory factory(...$parameters)
 * @mixin Eloquent
 */
class Role extends \Spatie\Permission\Models\Role
{
    use HasFactory;

    protected $guarded = [];


    public static function columns(array $array = [])
    {
        $columns = ['name', 'guard_name'];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param string $keyword
     * @param array  $columns
     *
     * @return Builder
     */
    public static function WhereLike($keyword = '', $columns = ['name'])
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
        return $q;
    }

}
