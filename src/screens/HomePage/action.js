export const action_type = {
    GETNEW: {
        REQUEST: "GETNEW.REQUEST",
        SUCCESS: "GETNEW.SUCCESS",
        ERROR: "GETNEW.ERROR"
    },
    GETCAR: {
        REQUEST: "GETCAR.REQUEST",
        SUCCESS: "GETCAR.SUCCESS",
        ERROR: "GETCAR.ERROR"
    }
}

export function getListCar (params)
{
    return {
        type: action_type.GETCAR.REQUEST,
        params,
    }
}

export function getListNew (params)
{
    return {
        type: action_type.GETNEW.REQUEST,
        params,
    }
}