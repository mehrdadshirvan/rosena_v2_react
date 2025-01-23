<?php

namespace App\Models;

use App\Constants\PermissionConstant;
use App\Constants\RoleConstant;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * Class Permission
 *
 * @property int                                                    $id
 * @property string                                                 $name
 * @property string                                                 $guard_name
 * @property Carbon|null                                            $created_at
 * @property Carbon|null                                            $updated_at
 * @property-read Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null                                          $permissions_count
 * @property-read Collection|\Spatie\Permission\Models\Role[]       $roles
 * @property-read int|null                                          $roles_count
 * @property-read Collection|User[]                                 $users
 * @property-read int|null                                          $users_count
 * @method static Builder|Permission newModelQuery()
 * @method static Builder|Permission newQuery()
 * @method static Builder|Permission permission($permissions)
 * @method static Builder|Permission query()
 * @method static Builder|Permission whereCreatedAt($value)
 * @method static Builder|Permission whereGuardName($value)
 * @method static Builder|Permission whereId($value)
 * @method static Builder|Permission whereName($value)
 * @method static Builder|Permission whereUpdatedAt($value)
 * @property string|null $description
 * @method static \Database\Factories\PermissionFactory factory(...$parameters)
 * @method static Builder|Permission whereDescription($value)
 * @mixin Eloquent
 */
class Permission extends \Spatie\Permission\Models\Permission
{
    use HasFactory;
    protected $fillable = ['name', 'guard_name', 'description'];

    public static function columns(array $array = [])
    {
        $columns = ['name', 'guard_name ', 'description'];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    public static function defaultPermissions()
    {
        return [

        ];
    }

    public static function webPermissions()
    {
        return PermissionConstant::webPermissions;
    }

    public static function apiPermissions()
    {
        return PermissionConstant::apiPermissions;
    }

    public static function otherPermissions()
    {
        return PermissionConstant::otherPermissions;
    }

    //execution replace with executionAgent
    //accountant replace with accountantAgent
    //execution188 replace with executionAgent188
    public static function role()
    {
        return RoleConstant::ROLES;
    }

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
