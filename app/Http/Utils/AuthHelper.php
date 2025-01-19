<?php


function AuthRoles() : array {
    if(auth()->check()){
        return auth()->user()->roles->pluck('name')->toArray();
    }
    return [];
}

function AuthPermissions() : array {
    if(auth()->check()){
        return auth()->user()->permissions->pluck('name')->toArray();
    }
    return [];
}
