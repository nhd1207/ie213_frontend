export const action_type = {
    GETINFOUSER: {
        REQUEST: "GETINFOUSER.REQUEST",
        SUCCESS: "GETINFOUSER.SUCCESS",
        ERROR: "GETINFOUSER.ERROR"
    },
    GETLISTBILL: {
        REQUEST: "GETLISTBILL.REQUEST",
        SUCCESS: "GETLISTBILL.SUCCESS",
        ERROR: "GETLISTBILL.ERROR"
    },
    UPDATEUSER: {
        REQUEST: "UPDATEUSER.REQUEST",
        SUCCESS: "UPDATEUSER.SUCCESS",
        ERROR: "UPDATEUSER.ERROR"
    }
}

export function getUser (params)
{
    return {
        type: action_type.GETINFOUSER.REQUEST,
        params,
    }
}

export function getListBill (params)
{
    return {
        type: action_type.GETLISTBILL.REQUEST,
        params,
    }
}

export function updateUser (params)
{
    return {
        type: action_type.UPDATEUSER.REQUEST,
        params,
    }
}
