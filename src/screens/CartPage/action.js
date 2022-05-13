export const action_type = {
    GETCART: {
        REQUEST: "GETCART.REQUEST",
        SUCCESS: "GETCART.SUCCESS",
        ERROR: "GETCART.ERROR"
    },
    UPDATECART: {
        REQUEST: "UPDATECARTLIST.REQUEST",
        SUCCESS: "UPDATECARTLIST.SUCCESS",
        ERROR: "UPDATECARTLIST.ERROR"
    },
    CREATEBILL: {
        REQUEST: "CREATEBILL.REQUEST",
        SUCCESS: "CREATEBILL.SUCCESS",
        ERROR: "CREATEBILL.ERROR"
    },
    GETMEFORCART: {
        REQUEST: "GETMEFORCART.REQUEST",
        SUCCESS: "GETMEFORCART.SUCCESS",
        ERROR: "GETMEFORCART.ERROR"
    }
}

export function getCart (params)
{
    return {
        type: action_type.GETCART.REQUEST,
        params,
    }
}

export function updateCart(params)
{
    return {
        type: action_type.UPDATECART.REQUEST,
        params
    }
}

export function createBill(params)
{
    return {
        type: action_type.CREATEBILL.REQUEST,
        params
    }
}

export function getMe(params)
{
    return {
        type: action_type.GETMEFORCART.REQUEST,
        params
    }
}