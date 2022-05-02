export const action_type = {
    ACCESSORY: {
        REQUEST: "ACCESSORY.REQUEST",
        SUCCESS: "ACCESSORY.SUCCESS",
        ERROR: "ACCESSORY.ERROR"
    },
    CREATE: {
        REQUEST: "ACCESSORY.CREATE.REQUEST",
        SUCCESS: "ACCESSORY.CREATE.SUCCESS",
        ERROR: "ACCESSORY.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "ACCESSORY.UPDATE.REQUEST",
        SUCCESS: "ACCESSORY.UPDATE.SUCCESS",
        ERROR: "ACCESSORY.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "ACCESSORY.DELETE.REQUEST",
        SUCCESS: "ACCESSORY.DELETE.SUCCESS",
        ERROR: "ACCESSORY.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.ACCESSORY.REQUEST,
        params,
    }
}

export function updateAccessory (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createAccessory (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteAccessory (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}