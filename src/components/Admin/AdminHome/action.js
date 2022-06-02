export const action_type = {
    ADMINDATA: {
        REQUEST: "ADMINDATA.REQUEST",
        SUCCESS: "ADMINDATA.SUCCESS",
        ERROR: "ADMINDATA.ERROR"
    },
    ORDERCOUNT: {
        //REQUEST: "ADMINDATA.REQUEST",
        SUCCESS: "ORDERCOUNT.SUCCESS",
        ERROR: "ORDERCOUNT.ERROR"
    },
    BILLCOUNT: {
        //REQUEST: "ADMINDATA.REQUEST",
        SUCCESS: "BILLCOUNT.SUCCESS",
        ERROR: "BILLCOUNT.ERROR"
    },
    POSTADMIN: {
        // REQUEST: "POSTADMIN.REQUEST",
        SUCCESS: "POSTADMIN.SUCCESS",
        ERROR: "POSTADMIN.ERROR"
    },
}

export function getData(params) {
    return {
        type: action_type.ADMINDATA.REQUEST,
        params,
    }
}
