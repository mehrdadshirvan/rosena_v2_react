<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Slider extends Model
{
    protected $table = 'sliders';

    public function columns($columns = []): array
    {
        $columns = [
            'user_id',
            'path',
            'title',
            'url',
        ];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    protected $appends = ['show_path'];

    public function getShowPathAttribute() : null | string{
        return !empty($this->path) ? url($this->path) : null;
    }

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
