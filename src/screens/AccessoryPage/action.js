export const action_type = {
    GETACCESSORY: {
        REQUEST: "GETACCESSORY.REQUEST",
        SUCCESS: "GETACCESSORY.SUCCESS",
        ERROR: "GETACCESSORY.ERROR"
    }
}

export function getListAccessory (params)
{
    return {
        type: action_type.GETACCESSORY.REQUEST,
        params,
    }
}