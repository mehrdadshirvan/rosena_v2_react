<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as LaravelModel;
use Illuminate\Database\Query\Builder;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;


/**
 * App\Models\Model
 *
 * @mixin Builder
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property-read Collection|Activity[] $activities
 * @property-read int|null              $activities_count
 * @method static \Illuminate\Database\Eloquent\Builder|Model newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Model newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Model query()
 * @mixin \Eloquent
 */
class Model extends LaravelModel
{
    use LogsActivity;

    protected static $logAttributes = ['*']; // Log all attributes
    protected static $logFillable = true; // Log fillable attributes
    protected static $logOnlyDirty = true; // Only log changes
    final public function tapActivity(Activity $activity,string $eventName)
    {
        //        $activity->properties = $this->getChanges();
        if ($eventName === 'created') {
            $activity->properties = $this->getAttributes(); // Capture attributes on creation
        }elseif ($eventName === 'deleted') {
            $activity->properties = $this->getAttributes(); // Capture changes on update
        }elseif ($eventName === 'updated') {
            $activity->properties = $this->getChanges(); // Capture changes on update
        }
    }

    final public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
        // TODO: Implement getActivitylogOptions() method.
    }
}
