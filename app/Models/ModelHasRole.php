<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ModelHasRole
 *
 * @property int $role_id
 * @property string $model_type
 * @property int $model_id
 * @method static \Database\Factories\ModelHasRoleFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole whereModelId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole whereModelType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ModelHasRole whereRoleId($value)
 * @mixin \Eloquent
 */
class ModelHasRole extends Model
{
    use HasFactory;
    protected $table = 'model_has_roles';
    public $timestamps = false;
    protected $fillable = ['role_id','model_name','model_id'];
}
