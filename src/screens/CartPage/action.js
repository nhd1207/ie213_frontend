export const action_type = {
    GETCART: {
        REQUEST: "GETCART.REQUEST",
        SUCCESS: "GETCART.SUCCESS",
        ERROR: "GETCART.ERROR"
    }
}

export function getCart (params)
{
    return {
        type: action_type.GETCART.REQUEST,
        params,
    }
}