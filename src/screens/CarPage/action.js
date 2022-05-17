export const action_type = {
    GETLISTCAR: {
        REQUEST: "GETLISTCAR.REQUEST",
        SUCCESS: "GETLISTCAR.SUCCESS",
        ERROR: "GETLISTCAR.ERROR"
    }
}

export function getListCar (params)
{
    return {
        type: action_type.GETLISTCAR.REQUEST,
        params,
    }
}
