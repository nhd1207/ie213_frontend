export const action_type = {
    POSTADMIN: {
        REQUEST: "POSTADMIN.REQUEST",
        SUCCESS: "POSTADMIN.SUCCESS",
        ERROR: "POSTADMIN.ERROR"
    },
    CREATE: {
        REQUEST: "POSTADMIN.CREATE.REQUEST",
        SUCCESS: "POSTADMIN.CREATE.SUCCESS",
        ERROR: "POSTADMIN.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "POSTADMIN.UPDATE.REQUEST",
        SUCCESS: "POSTADMIN.UPDATE.SUCCESS",
        ERROR: "POSTADMIN.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "POSTADMIN.DELETE.REQUEST",
        SUCCESS: "POSTADMIN.DELETE.SUCCESS",
        ERROR: "POSTADMIN.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.POSTADMIN.REQUEST,
        params,
    }
}

export function updatePost (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createPost (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deletePost (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}