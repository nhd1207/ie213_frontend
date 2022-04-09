export const action_type = {
    GETPOST: {
        REQUEST: "GETPOST.REQUEST",
        SUCCESS: "GETPOST.SUCCESS",
        ERROR: "GETPOST.ERROR"
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

export function getListPost (params)
{
    return {
        type: action_type.GETPOST.REQUEST,
        params,
    }
}