<?php

namespace App\Constants;
class PermissionConstant
{
    const GUARD_WEB = 'web';
    const GUARD_API = 'api';
    const GUARDS    = [
        self::GUARD_WEB,
        self::GUARD_API,
    ];

    const ROLES_INDEX   = 'index';
    const ROLES_SHOW    = 'show';
    const ROLES_CREATE  = 'store';
    const ROLES_EDIT    = 'update';
    const ROLES_DESTROY = 'destroy';

    const ROLES = [
        self::ROLES_INDEX,
        self::ROLES_SHOW,
        self::ROLES_CREATE,
        self::ROLES_EDIT,
        self::ROLES_DESTROY,
    ];


    const ROUTE_dashboard       = 'dashboard';
    const ROUTE_countries       = 'countries';
    const ROUTE_states          = 'states';
    const ROUTE_roles           = 'roles';
    const ROUTE_users           = 'users';
    const ROUTE_products           = 'products';
    const ROUTE_medias          = 'medias';


    const ROUTE_tickets = 'tickets';
    const ROUTE_ticket_message = 'ticket-messages';
    const ROUTE_ticket_assign = 'ticket-assign';
    const ROUTE_ticket_admin_note = 'ticket-admin-note';

    const webPermissions = [
        self::ROUTE_dashboard,
        self::ROUTE_countries,
        self::ROUTE_states,
        self::ROUTE_roles,
        self::ROUTE_users,
        self::ROUTE_products,
        self::ROUTE_medias,
        self::ROUTE_tickets,
        self::ROUTE_ticket_message,
        self::ROUTE_ticket_admin_note,
        self::ROUTE_ticket_assign,
    ];

    const apiPermissions = [];
    const otherPermissions = [];

    const WebPanelAPIPermissions = [

    ];

}
