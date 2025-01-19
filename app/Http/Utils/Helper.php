<?php

include 'SiteHelper.php';
include 'AuthHelper.php';
include 'HttpHelper.php';
include 'DateHelper.php';
include 'FileHelper.php';
include 'FormHelper.php';
include 'QueryHelper.php';


function PanelMenuItemIsActive($url) : string{
    return request()->is($url) ? 'bg-gray-100 text-first' : 'text-gray-500';
}

function uuid()
{
    return \Illuminate\Support\Str::uuid();
}
