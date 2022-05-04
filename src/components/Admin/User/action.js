export const action_type = {
    USERADMIN: {
        REQUEST: "USERADMIN.REQUEST",
        SUCCESS: "USERADMIN.SUCCESS",
        ERROR: "USERADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "USERADMIN.CREATE.REQUEST",
        SUCCESS: "USERADMIN.CREATE.SUCCESS",
        ERROR: "USERADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "USERADMIN.UPDATE.REQUEST",
        SUCCESS: "USERADMIN.UPDATE.SUCCESS",
        ERROR: "USERADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "USERADMIN.DELETE.REQUEST",
        SUCCESS: "USERADMIN.DELETE.SUCCESS",
        ERROR: "USERADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.USERADMIN.REQUEST,
        params,
    }
}

export function updateUser (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createUser (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteUser (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}