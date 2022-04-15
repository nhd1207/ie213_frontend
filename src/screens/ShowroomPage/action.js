export const action_type = {
    GETPOST: {
        REQUEST: "GETSHOWROOM.REQUEST",
        SUCCESS: "GETSHOWROOM.SUCCESS",
        ERROR: "GETSHOWROOM.ERROR"
    }
}

export function getListShowroom (params)
{
    return {
        type: action_type.GETSHOWROOM.REQUEST,
        params,
    }
}
