export const action_type = {
    GETPOST: {
        REQUEST: "GETPOSTDETAIL.REQUEST",
        SUCCESS: "GETPOSTDETAIL.SUCCESS",
        ERROR: "GETPOSTDETAIL.ERROR"
    }
}


export function getListPost (params)
{
    return {
        type: action_type.GETPOST.REQUEST,
        params,
    }
}