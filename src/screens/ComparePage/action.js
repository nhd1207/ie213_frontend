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
    },
    GETCAR1: {
        REQUEST: "GETCAR1.REQUEST",
        SUCCESS: "GETCAR1.SUCCESS",
        ERROR: "GETCAR1.ERROR"
    },
    GETCAR2: {
        REQUEST: "GETCAR2.REQUEST",
        SUCCESS: "GETCAR2.SUCCESS",
        ERROR: "GETCAR2.ERROR"
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

export function getCar1 (params)
{
    return {
        type: action_type.GETCAR1.REQUEST,
        params,
    }
}

export function getCar2 (params)
{
    return {
        type: action_type.GETCAR2.REQUEST,
        params,
    }
}