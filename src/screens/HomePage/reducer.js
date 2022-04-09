import { action_type as type } from './action'

const initialState = {
    loading: false,
    car: [],
    new: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCAR.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETCAR.SUCCESS:
            return {
                ...state,
                car: action.data,
                loading: false,
            }
        case type.GETCAR.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETNEW.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETNEW.SUCCESS:
            return {
                ...state,
                new: action.data,
                loading: false,
            }
        case type.GETNEW.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
