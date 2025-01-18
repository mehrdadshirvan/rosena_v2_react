<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $table = 'products';

    public function columns($columns = []): array
    {
        $columns = [
            'user_id',
            'name',
            'name_url',
            'ename',
            'ename_url',
            'brand_id',
            'content',
            'short_description',
            'special',
            'image',
            'video',
            'code',
            'barcode',
            'seo_title',
            'seo_des',
            'seo_key',
            'views',
            'stock',
            'fake',
            'weight',
            'status',
        ];
        if (!empty($array[0])) {
            $columns = array_merge($columns, $array);
        }
        return $columns;
    }

    protected $appends = ['image_url','url'];

    public function getImageUrlAttribute(){
        return !empty($this->image) ? url($this->image) : null;
    }

    public function getUrlAttribute(){
        return url('/products/'.$this->code.'/'.$this->name_url);
    }

}
