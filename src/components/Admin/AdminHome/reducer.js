import { action_type as type } from './action'

const initialState = {
    loading: false,
    loadingOrder: false,
    loadingBill: false,
    loadingPost: false,
    user: [],
    accessoryBill: [],
    carOrder: [],
    billCount: [],
    orderCount: [],
    post: [],

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.ADMINDATA.REQUEST:
            return {
                ...state,
                loading: true,
                loadingOrder: true,
                loadingBill: true,
                loadingPost: true
            }
        case type.ADMINDATA.SUCCESS:
            return {
                ...state,
                //data: action.data,
                user: action.user,
                accessoryBill: action.accessoryBill,
                carOrder: action.carOrder,
                post: action.post,
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
        case type.BILLCOUNT.SUCCESS:
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
        case type.POSTADMIN.SUCCESS:
            return {
                ...state,
                post: action.data,
                loadingPost: false,
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
