export const action_type = {
    SIGNUP: {
        REQUEST: "AUTH.SIGNUP.REQUEST",
        SUCCESS: "AUTH.SIGNUP.SUCCESS",
        ERROR: "AUTH.SIGNUP.ERROR"
    },
}

export function signup (params)
{
    return {
        type: action_type.SIGNUP.REQUEST,
        params
    }
}
