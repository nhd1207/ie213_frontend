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