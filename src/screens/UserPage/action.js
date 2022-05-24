export const action_type = {
    GETUSER: {
        REQUEST: "GETUSER.REQUEST",
        SUCCESS: "GETUSER.SUCCESS",
        ERROR: "GETUSER.ERROR"
    },
    GETLISTBILL: {
        REQUEST: "GETLISTBILL.REQUEST",
        SUCCESS: "GETLISTBILL.SUCCESS",
        ERROR: "GETLISTBILL.ERROR"
    }
}

export function getUser (params)
{
    return {
        type: action_type.GETUSER.REQUEST,
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
