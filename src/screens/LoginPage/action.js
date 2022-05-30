export const action_type = {
    LOGIN: {
        REQUEST: "AUTH.LOGIN.REQUEST",
        SUCCESS: "AUTH.LOGIN.SUCCESS",
        ERROR: "AUTH.LOGIN.ERROR"
    },
    LOGOUT: {
        REQUEST: "AUTH.LOGOUT.REQUEST",
        SUCCESS: "AUTH.LOGOUT.SUCCESS",
        ERROR: "AUTH.LOGOUT.ERROR"
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
    },
    LAYOUT: {
        REQUEST: "LAYOUT.REQUEST",
        SUCCESS: "LAYOUT.SUCCESS",
        ERROR: "LAYOUT.ERROR"
    }

}

export function login (params, url)
{
    return {
        type: action_type.LOGIN.REQUEST,
        params,
        url
    }
}

export function logout (params)
{
    return {
        type: action_type.LOGOUT.REQUEST,
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

export function verifyLayout (params)
{
    return {
        type: action_type.LAYOUT.REQUEST,
        params
    }
}

export function getListUser (params) {
    return {
        type: action_type.USER.REQUEST,
        params
    }
}