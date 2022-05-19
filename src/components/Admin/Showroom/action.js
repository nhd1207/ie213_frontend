export const action_type = {
    SHOWROOM: {
        REQUEST: "SHOWROOMADMIN.REQUEST",
        SUCCESS: "SHOWROOMADMIN.SUCCESS",
        ERROR: "SHOWROOMADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "SHOWROOMADMIN.CREATE.REQUEST",
        SUCCESS: "SHOWROOMADMIN.CREATE.SUCCESS",
        ERROR: "SHOWROOMADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "SHOWROOMADMIN.UPDATE.REQUEST",
        SUCCESS: "SHOWROOMADMIN.UPDATE.SUCCESS",
        ERROR: "SHOWROOMADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "SHOWROOMADMIN.DELETE.REQUEST",
        SUCCESS: "SHOWROOMADMIN.DELETE.SUCCESS",
        ERROR: "SHOWROOMADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.SHOWROOM.REQUEST,
        params,
    }
}

export function updateShowroom (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createShowroom (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteShowroom (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}