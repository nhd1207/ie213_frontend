export const action_type = {
    ACCESSORYBILL: {
        REQUEST: "ACCESSORYBILL.REQUEST",
        SUCCESS: "ACCESSORYBILL.SUCCESS",
        ERROR: "ACCESSORYBILL.ERROR"
    },
    CREATE: {
        REQUEST: "ACCESSORYBILL.CREATE.REQUEST",
        SUCCESS: "ACCESSORYBILL.CREATE.SUCCESS",
        ERROR: "ACCESSORYBILL.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "ACCESSORYBILL.UPDATE.REQUEST",
        SUCCESS: "ACCESSORYBILL.UPDATE.SUCCESS",
        ERROR: "ACCESSORYBILL.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "ACCESSORYBILL.DELETE.REQUEST",
        SUCCESS: "ACCESSORYBILL.DELETE.SUCCESS",
        ERROR: "ACCESSORYBILL.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.ACCESSORYBILL.REQUEST,
        params,
    }
}

export function updateAccessoryBill (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
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