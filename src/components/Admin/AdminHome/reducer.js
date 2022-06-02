import { action_type as type } from './action'

const initialState = {
    loading: false,
    loadingOrder: false,
    loadingBill: false,
    user: [],
    accessoryBill: [],
    carOrder: [],
    billCount: [],
    orderCount: [],

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.ADMINDATA.REQUEST:
            return {
                ...state,
                loading: true,
                loadingOrder: true,
                loadingBill: true
            }
        case type.ADMINDATA.SUCCESS:
            return {
                ...state,
                //data: action.data,
                user: action.user,
                accessoryBill: action.accessoryBill,
                carOrder: action.carOrder,
                loading: false,
            }
        case type.ADMINDATA.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.ORDERCOUNT.SUCCESS:
            return {
                ...state,
                orderCount: action.countOrder,
                loadingOrder: false,
            }
        case type.ADMINDATA.ERROR:
            return {
                ...state,
                loading: false,
            }
            case type.ORDERCOUNT.SUCCESS:
            return {
                ...state,
                billCount: action.countBill,
                loadingBill: false,
            }
        case type.ADMINDATA.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
