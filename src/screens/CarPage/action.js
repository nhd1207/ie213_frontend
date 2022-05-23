export const action_type = {
    GETLISTCAR: {
        REQUEST: "GETLISTCAR.REQUEST",
        SUCCESS: "GETLISTCAR.SUCCESS",
        ERROR: "GETLISTCAR.ERROR"
    },
    FILTER: {
        REQUEST: "CARFILTER.REQUEST",
        SUCCESS: "CARFILTER.SUCCESS",
        ERROR: "CARFILTER.ERROR"
    }
}

export function getListCar (params)
{
    return {
        type: action_type.GETLISTCAR.REQUEST,
        params,
    }
}

export function filter (params)
{
    return {
        type: action_type.FILTER.REQUEST,
        params,
    }
}
