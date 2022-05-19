export const action_type = {
    GETUSER: {
        REQUEST: "GETUSERWISHLIST.REQUEST",
        SUCCESS: "GETUSERWISHLIST.SUCCESS",
        ERROR: "GETUSERWISHLIST.ERROR"
    },
    DELETEWISHLIST: {
        REQUEST: "DELETEWISHLIST.REQUEST",
        SUCCESS: "DELETEWISHLIST.SUCCESS",
        ERROR: "DELETEWISHLIST.ERROR"
    }
}

export function getWishList (params)
{
    return {
        type: action_type.GETUSER.REQUEST,
        params,
    }
}

export function deleteWishList(params)
{
    return {
        type: action_type.DELETEWISHLIST.REQUEST,
        params
    }
}