export const action_type = {
    SIGNUP: {
        REQUEST: "SIGNUP.REQUEST",
        SUCCESS: "SIGNUP.SUCCESS",
        ERROR: "SIGNUP.ERROR"
    },
}

export function signup (params)
{
    return {
        type: action_type.SIGNUP.REQUEST,
        params
    }
}
