export const action_type = {
    GETPOST: {
        REQUEST: "GETPOSTDETAIL.REQUEST",
        SUCCESS: "GETPOSTDETAIL.SUCCESS",
        ERROR: "GETPOSTDETAIL.ERROR"
    }
}


export function getListPost (ID)
{
    return {
        type: action_type.GETPOST.REQUEST,
        ID,
    }
}