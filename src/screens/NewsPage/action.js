export const action_type = {
    GETPOST: {
        REQUEST: "GETPOSTPAGE.REQUEST",
        SUCCESS: "GETPOSTPAGE.SUCCESS",
        ERROR: "GETPOSTPAGE.ERROR"
    }
}


export function getListPost (params)
{
    return {
        type: action_type.GETPOST.REQUEST,
        params,
    }
}