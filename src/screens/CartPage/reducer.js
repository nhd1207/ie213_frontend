import { action_type as type } from './action'

const initialState = {
    loading: false,
    carts: [],
    userInfo: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCART.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETCART.SUCCESS:
            return {
                ...state,
                carts: action.cart,
                loading: false,
            }
        case type.GETCART.ERROR:
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
                carts: action.cart,
                loading: false,
            }
        case type.UPDATECART.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.CREATEBILL.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.CREATEBILL.SUCCESS:
            return {
                ...state,
                carts: action.cart,
                loading: false,
            }
        case type.CREATEBILL.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETMEFORCART.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETMEFORCART.SUCCESS:
            return {
                ...state,
                userInfo: action.user,
                loading: false,
            }
        case type.GETMEFORCART.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
