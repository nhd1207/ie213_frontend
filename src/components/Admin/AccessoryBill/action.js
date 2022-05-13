export const action_type = {
    ACCESSORYBILLADMIN: {
        REQUEST: "ACCESSORYBILLADMIN.REQUEST",
        SUCCESS: "ACCESSORYBILLADMIN.SUCCESS",
        ERROR: "ACCESSORYBILLADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "ACCESSORYBILLADMIN.CREATE.REQUEST",
        SUCCESS: "ACCESSORYBILLADMIN.CREATE.SUCCESS",
        ERROR: "ACCESSORYBILLADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "ACCESSORYBILLADMIN.UPDATE.REQUEST",
        SUCCESS: "ACCESSORYBILLADMIN.UPDATE.SUCCESS",
        ERROR: "ACCESSORYBILLADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "ACCESSORYBILLADMIN.DELETE.REQUEST",
        SUCCESS: "ACCESSORYBILLADMIN.DELETE.SUCCESS",
        ERROR: "ACCESSORYBILLADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.ACCESSORYBILLADMIN.REQUEST,
        params,
    }
}

export function updateAccessoryBill (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        id,
        params
    }
}

export function createAccessoryBill (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteAccessoryBill (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}