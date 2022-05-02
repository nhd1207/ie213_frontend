export const action_type = {
    CAR: {
        REQUEST: "CAR.REQUEST",
        SUCCESS: "CAR.SUCCESS",
        ERROR: "CAR.ERROR"
    },
    CREATE: {
        REQUEST: "CAR.CREATE.REQUEST",
        SUCCESS: "CAR.CREATE.SUCCESS",
        ERROR: "CAR.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "CAR.UPDATE.REQUEST",
        SUCCESS: "CAR.UPDATE.SUCCESS",
        ERROR: "CAR.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "CAR.DELETE.REQUEST",
        SUCCESS: "CAR.DELETE.SUCCESS",
        ERROR: "CAR.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CAR.REQUEST,
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