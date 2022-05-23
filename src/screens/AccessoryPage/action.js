export const action_type = {
    GETACCESSORY: {
        REQUEST: "GETACCESSORY.REQUEST",
        SUCCESS: "GETACCESSORY.SUCCESS",
        ERROR: "GETACCESSORY.ERROR"
    },
    ADDACCESSORYTOWISHLIST: {
        REQUEST: "ADDACCESSORYTOWISHLIST.REQUEST",
        SUCCESS: "ADDACCESSORYTOWISHLIST.SUCCESS",
        ERROR: "ADDACCESSORYTOWISHLIST.ERROR",
    },
    SEARCH: {
        REQUEST: "SEARCHACCESSORY.REQUEST",
        SUCCESS: "SEARCHACCESSORY.SUCCESS",
        ERROR: "SEARCHACCESSORY.ERROR",
    }
}

export function getListAccessory (params)
{
    return {
        type: action_type.GETACCESSORY.REQUEST,
        params,
    }
}

export function addAccessoryToWishlist (data)
{
    return {
        type: action_type.ADDACCESSORYTOWISHLIST.REQUEST,
        data
    }
}

export function search (data)
{
    return {
        type: action_type.SEARCH.REQUEST,
        data
    }
}