export const action_type = {
    USER: {
        REQUEST: "USER.REQUEST",
        SUCCESS: "USER.SUCCESS",
        ERROR: "USER.ERROR"
    },
    CREATE: {
        REQUEST: "USER.CREATE.REQUEST",
        SUCCESS: "USER.CREATE.SUCCESS",
        ERROR: "USER.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "USER.UPDATE.REQUEST",
        SUCCESS: "USER.UPDATE.SUCCESS",
        ERROR: "USER.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "DELETE.REQUEST",
        SUCCESS: "DELETE.SUCCESS",
        ERROR: "DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.USER.REQUEST,
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