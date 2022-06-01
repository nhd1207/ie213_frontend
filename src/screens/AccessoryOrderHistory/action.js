export const action_type = {
    GETACCESSORYHISTORY: {
        REQUEST: "GETACCESSORYHISTORY.REQUEST",
        SUCCESS: "GETACCESSORYHISTORY.SUCCESS",
        ERROR: "GETACCESSORYHISTORY.ERROR"
    }
}

export function getAccessoryHistory (params)
{
    return {
        type: action_type.GETACCESSORYHISTORY.REQUEST,
        params,
    }
}
