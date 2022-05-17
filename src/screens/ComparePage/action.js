export const action_type = {
    GETCARBYID: {
        REQUEST: "GETCARBYID.REQUEST",
        SUCCESS: "GETCARBYID.SUCCESS",
        ERROR: "GETCARBYID.ERROR"
    }
}

export function getCarByID (params)
{
    return {
        type: action_type.GETCARBYID.REQUEST,
        params,
    }
}
