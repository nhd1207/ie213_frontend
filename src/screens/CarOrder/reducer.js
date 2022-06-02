import { action_type as type } from './action'

const initialState = {
    loading: false,
    car: {},
    showroom: [],
    orderLoading: false,
    status: "",
    go: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCARORDER.REQUEST:
            return {
                ...state,
                loading: true,
                go: false
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
                orderLoading: true,
            }
        case type.CREATECARORDER.SUCCESS:
            return {
                ...state,
                status: action.status,
                carOrder: action.carOrder,
                orderLoading: false,
                go: true
            }
        case type.CREATECARORDER.ERROR:
            return {
                ...state,
                orderLoading: false,
            }
        default:
            return state
    }
}

export default reducer
