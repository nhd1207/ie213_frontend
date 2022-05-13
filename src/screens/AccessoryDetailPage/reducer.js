import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: {},
    message: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETDETAILACCESSORY.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETDETAILACCESSORY.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.GETDETAILACCESSORY.ERROR:
            return {
                ...state,
                loading: false,
            }
            case type.UPDATECART.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.UPDATECART.SUCCESS:
            return {
                ...state,
                message: action.message,
                loading: false,
            }
        case type.UPDATECART.ERROR:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return state
    }
}

export default reducer
