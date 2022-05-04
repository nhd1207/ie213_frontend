export const action_type = {
    ACCESSORYADMIN: {
        REQUEST: "ACCESSORYADMIN.REQUEST",
        SUCCESS: "ACCESSORYADMIN.SUCCESS",
        ERROR: "ACCESSORYADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "ACCESSORYADMIN.CREATE.REQUEST",
        SUCCESS: "ACCESSORYADMIN.CREATE.SUCCESS",
        ERROR: "ACCESSORYADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "ACCESSORYADMIN.UPDATE.REQUEST",
        SUCCESS: "ACCESSORYADMIN.UPDATE.SUCCESS",
        ERROR: "ACCESSORYADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "ACCESSORYADMIN.DELETE.REQUEST",
        SUCCESS: "ACCESSORYADMIN.DELETE.SUCCESS",
        ERROR: "ACCESSORYADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.ACCESSORYADMIN.REQUEST,
        params,
    }
}

export function updateAccessory (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createAccessory (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteAccessory (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}