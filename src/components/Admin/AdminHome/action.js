export const action_type = {
    ADMINDATA: {
        REQUEST: "ADMINDATA.REQUEST",
        SUCCESS: "ADMINDATA.SUCCESS",
        ERROR: "ADMINDATA.ERROR"
    }
}

export function getData (params)
{
    return {
        type: action_type.ADMINDATA.REQUEST,
        params,
    }
}
