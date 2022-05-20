export const action_type = {
    GETCARORDER: {
        REQUEST: "GETCARORDER.REQUEST",
        SUCCESS: "GETCARORDER.SUCCESS",
        ERROR: "GETCARORDER.ERROR"
    },
    GETLISTSHOWROOM: {
        REQUEST: "GETLISTSHOWROOM.REQUEST",
        SUCCESS: "GETLISTSHOWROOM.SUCCESS",
        ERROR: "GETLISTSHOWROOM.ERROR",
    },
    CREATECARORDER: {
        REQUEST: "CREATECARORDER.REQUEST",
        SUCCESS: "CREATECARORDER.SUCCESS",
        ERROR: "CREATECARORDER.ERROR",
    },
    
}

export function getCarOrder (params)
{
    return {
        type: action_type.GETCARORDER.REQUEST,
        params,
    }
}

export function getListShowroom (params)
{
    return {
        type: action_type.GETLISTSHOWROOM.REQUEST,
        params
    }
}

export function createCarOrder (params)
{
    return {
        type: action_type.CREATECARORDER.REQUEST,
        params
    }
}
