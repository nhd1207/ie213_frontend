export const action_type = {
    GETCARHHISTORY: {
        REQUEST: "GETCARHHISTORY.REQUEST",
        SUCCESS: "GETCARHHISTORY.SUCCESS",
        ERROR: "GETCARHHISTORY.ERROR"
    }
    
}

export function getCarHistory (params)
{
    return {
        type: action_type.GETCARHHISTORY.REQUEST,
        params,
    }
}