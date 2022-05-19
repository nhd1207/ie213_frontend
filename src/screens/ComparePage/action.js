export const action_type = {
    GETLISTCOMPARE: {
        REQUEST: "GETLISTCOMPARE.REQUEST",
        SUCCESS: "GETLISTCOMPARE.SUCCESS",
        ERROR: "GETLISTCOMPARE.ERROR"
    },
    COMPARETWOCAR : {
        REQUEST: "COMPARETWOCAR.REQUEST",
        SUCCESS: "COMPARETWOCAR.SUCCESS",
        ERROR: "COMPARETWOCAR.ERROR"
    }
}

export function getListCar (params)
{
    return {
        type: action_type.GETLISTCOMPARE.REQUEST,
        params,
    }
}

export function compareTwoCar (params)
{
    return {
        type: action_type.COMPARETWOCAR.REQUEST,
        params,
    }
}