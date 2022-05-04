export const action_type = {
    CARADMIN: {
        REQUEST: "CARADMIN.REQUEST",
        SUCCESS: "CARADMIN.SUCCESS",
        ERROR: "CARADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "CARADMIN.CREATE.REQUEST",
        SUCCESS: "CARADMIN.CREATE.SUCCESS",
        ERROR: "CARADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "CARADMIN.UPDATE.REQUEST",
        SUCCESS: "CARADMIN.UPDATE.SUCCESS",
        ERROR: "CARADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "CARADMIN.DELETE.REQUEST",
        SUCCESS: "CARADMIN.DELETE.SUCCESS",
        ERROR: "CARADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CARADMIN.REQUEST,
        params,
    }
}

export function updateCar (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createCar (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteCar (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}