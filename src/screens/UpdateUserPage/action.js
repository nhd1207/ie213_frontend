export const action_type = {
    UPDATEUSER: {
        REQUEST: "UPDATEUSER.REQUEST",
        SUCCESS: "UPDATEUSER.SUCCESS",
        ERROR: "UPDATEUSER.ERROR"
    }
}

export function updateUser (params)
{
    return {
        type: action_type.UPDATEUSER.REQUEST,
        params,
    }
}