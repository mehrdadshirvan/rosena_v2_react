<?php

namespace App\Http\Controllers\Panel;

use App\Constants\PermissionConstant;
use App\Http\Controllers\Controller;
use App\Http\Requests\Role\RoleRequest;
use App\Http\Resources\Api\Web\V1\RoleResource;
use App\Models\Permission;
use App\Models\Permission as PermissionModel;
use App\Models\Role as RoleModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleController extends Controller
{

//    protected $feature = 'roles';

    /**
     * @param Request $request
     * @return  \Inertia\Response
     */
    public function index(Request $request)
    {
        $roles = RoleModel::all();
        return Inertia::render('Panel/Roles/Index', [
            'roles' => RoleResource::collection($roles),
        ]);
    }

    public function show($id,Request $request)
    {
        if ($id == -1) {
            app()->make(PermissionRegistrar::class)->forgetCachedPermissions();
            $this->setRole();
            $this->setWebPermission();
            return redirect(url('/panel/roles'));
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param RoleRequest $request
     *
     * @return \Illuminate\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(RoleRequest $request)
    {
        $role = RoleModel::create(QueryHelper(RoleModel::columns(), $request, collect(NULL)));
        $role->permissions()->sync($request->permissions);
        $role->save();
        return redirect(url('/panel/roles'));
    }
    /**
     * @param $id
     * @param Request $request
     * @return  view
     */
    public function create(Request $request)
    {
        $permissions = Permission::query()->orderBy('id', 'ASC')->get();
        return view('panel.role.form', ['permissions'=>$permissions]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return  view
     */
    public function edit($id, Request $request)
    {
        $role = RoleModel::query()->where('id', $id)->with('permissions')->first();
        $permissions = Permission::query()->orderBy('id', 'ASC')->get();
        return view('panel.role.form',['role'=>$role,'permissions'=>$permissions]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\Panel\RoleRequest $request
     * @param RoleModel   $Role
     * @return Response
     */
    public function update(RoleRequest $request, RoleModel $Role)
    {
        $Role->update(QueryHelper(RoleModel::columns(), $request, collect($Role)));
        $Role->permissions()->sync($request->permissions);
        return redirect()->back();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param integer $id
     *
     * @return JsonResponse
     */
    public function destroy($id)
    {
        return response_true(RoleModel::query()->where(['id'=>$id])->delete());
    }

    public function setWebPermission()
    {
        $actions = PermissionConstant::ROLES;
        $permissions = PermissionModel::webPermissions();
        foreach ($permissions as $permission) {
            foreach ($actions as $action) {
                $permissionName = $permission . '.' . $action;
                \Spatie\Permission\Models\Permission::findOrCreate($permissionName, 'web');
            }
        }
    }

    public function setRole()
    {
        $roles = PermissionModel::role();
        foreach ($roles as $role) {
            Role::findOrCreate($role, 'web');
        }
    }
}
