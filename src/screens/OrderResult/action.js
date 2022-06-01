export const action_type = {
    CANCELORDER: {
        REQUEST: "CANCELORDER.REQUEST",
        SUCCESS: "CANCELORDER.SUCCESS",
        ERROR: "SICANCELORDERGNUP.ERROR"
    }
}

export function cancelOrder (id)
{
    return {
        type: action_type.CANCELORDER.REQUEST,
        id
    }
}