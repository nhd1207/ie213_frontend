export const action_type = {
    CARORDER: {
        REQUEST: "CARORDER.REQUEST",
        SUCCESS: "CARORDER.SUCCESS",
        ERROR: "CARORDER.ERROR"
    },
    CREATE: {
        REQUEST: "CARORDER.CREATE.REQUEST",
        SUCCESS: "CARORDER.CREATE.SUCCESS",
        ERROR: "CARORDER.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "CARORDER.UPDATE.REQUEST",
        SUCCESS: "CARORDER.UPDATE.SUCCESS",
        ERROR: "CARORDER.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "CARORDER.DELETE.REQUEST",
        SUCCESS: "CARORDER.DELETE.SUCCESS",
        ERROR: "CARORDER.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CARORDER.REQUEST,
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