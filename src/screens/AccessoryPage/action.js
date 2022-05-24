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
    FILTER: {
        REQUEST: "ACCESSORYFILTER.REQUEST",
        SUCCESS: "ACCESSORYFILTER.SUCCESS",
        ERROR: "ACCESSORYFILTER.ERROR"
    },
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

export function filter (params)
{
    return {
        type: action_type.FILTER.REQUEST,
        params,
    }
}
