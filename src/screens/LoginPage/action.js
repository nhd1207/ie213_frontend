export const action_type = {
    LOGIN: {
        REQUEST: "AUTH.LOGIN.REQUEST",
        SUCCESS: "AUTH.LOGIN.SUCCESS",
        ERROR: "AUTH.LOGIN.ERROR"
    },
    VERIFY: {
        REQUEST: "AUTH.VERIFY.REQUEST",
        SUCCESS: "AUTH.VERIFY.SUCCESS",
        ERROR: "AUTH.VERIFY.ERROR"
    },
    USER: {
        REQUEST: "USER.REQUEST",
        SUCCESS: "USER.SUCCESS",
        ERROR: "USER.ERROR"
    }
}

export function login (params)
{
    return {
        type: action_type.LOGIN.REQUEST,
        params
    }
}
export function verify (params)
{
    return {
        type: action_type.VERIFY.REQUEST,
        params
    }
}

export function getListUser (params) {
    return {
        type: action_type.USER.REQUEST,
        params
    }
}