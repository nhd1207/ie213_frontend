export const action_type = {
    CARORDERADMIN: {
        REQUEST: "CARORDERADMIN.REQUEST",
        SUCCESS: "CARORDERADMIN.SUCCESS",
        ERROR: "CARORDERADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "CARORDERADMIN.CREATE.REQUEST",
        SUCCESS: "CARORDERADMIN.CREATE.SUCCESS",
        ERROR: "CARORDERADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "CARORDERADMIN.UPDATE.REQUEST",
        SUCCESS: "CARORDERADMIN.UPDATE.SUCCESS",
        ERROR: "CARORDERADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "CARORDERADMIN.DELETE.REQUEST",
        SUCCESS: "CARORDERADMIN.DELETE.SUCCESS",
        ERROR: "CARORDERADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CARORDERADMIN.REQUEST,
        params,
    }
}

export function updateCarOrder (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createCarOrder(params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteCarOrder(id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}