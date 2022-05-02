export const action_type = {
    GETUSER: {
        REQUEST: "GETUSER.REQUEST",
        SUCCESS: "GETUSER.SUCCESS",
        ERROR: "GETUSER.ERROR"
    }
}

export function getUser (params)
{
    return {
        type: action_type.GETUSER.REQUEST,
        params,
    }
}