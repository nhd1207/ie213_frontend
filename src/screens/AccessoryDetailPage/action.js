export const action_type = {
    GETDETAILACCESSORY: {
        REQUEST: "GETDETAILACCESSORY.REQUEST",
        SUCCESS: "GETDETAILACCESSORY.SUCCESS",
        ERROR: "GETDETAILACCESSORY.ERROR"
    },
    UPDATECART: {
        REQUEST: "UPDATECART.REQUEST",
        SUCCESS: "UPDATECART.SUCCESS",
        ERROR: "UPDATECART.ERROR"
    }
}

export function getDetailAccessory (params)
{
    return {
        type: action_type.GETDETAILACCESSORY.REQUEST,
        params,
    }
}

export function updateCart (data)
{
    return {
        type: action_type.UPDATECART.REQUEST,
        data
    }
}