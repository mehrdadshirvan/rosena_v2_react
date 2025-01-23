<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use \App\Http\Requests\Role\PermissionRequest;
use App\Models\Permission;
use App\Models\Role as RoleModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\View;
use Spatie\Permission\PermissionRegistrar;

class PermissionController extends Controller
{

    protected $feature = 'permissions';

    /**
     * @param Request $request
     * @return  view
     */
    public function index(Request $request)
    {
        return view('panel.permission.index');
    }

    /**
     * @param $id
     * @param Request $request
     * @return  view
     */
    public function create(Request $request)
    {
        return view('panel.permission.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PermissionRequest $request
     * @return JsonResponse
     */
    public function store(PermissionRequest $request)
    {
        Permission::create(QueryHelper(Permission::columns(), $request, collect(null)))->save();
        app()->make(PermissionRegistrar::class)->forgetCachedPermissions();
        return redirect(url('/panel/permissions'));
    }

    /**
     * @param $id
     * @param Request $request
     * @return  view
     */
    public function edit($id, Request $request)
    {
        $permission = Permission::where('id', $id)->first();
        return view('panel.permission.form', ['permission' => $permission]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param PermissionRequest $request
     * @param Permission  $permission
     * @return \Illuminate\Http\RedirectResponse
     */
    public function  update(PermissionRequest $request, Permission $permission)
    {
        $permission->update(QueryHelper(Permission::columns(), $request, collect($permission)));
        return redirect()->back();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param integer $id
     *
     * @return JsonResponse
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        $permission->permissions()->sync([]);
        app()->make(PermissionRegistrar::class)->forgetCachedPermissions();
        return response_true(true);

    }

}
