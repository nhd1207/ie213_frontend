import { action_type as type } from './action'

const initialState = {
    loading: false,
    car: {},
    showroom: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCARORDER.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETCARORDER.SUCCESS:
            return {
                ...state,
                car: action.data,
                loading: false,
            }
        case type.GETCARORDER.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETLISTSHOWROOM.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETLISTSHOWROOM.SUCCESS:
            return {
                ...state,
                showroom: action.data,
                loading: false,
            }
        case type.GETLISTSHOWROOM.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.CREATECARORDER.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.CREATECARORDER.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.CREATECARORDER.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
