import { action_type as type } from './action'

const initialState = {
    loading: false,
    wishList: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETUSER.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETUSER.SUCCESS:
            return {
                ...state,
                wishList: action.user.wishList,
                loading: false,
            }
        case type.GETUSER.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.DELETEWISHLIST.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.DELETEWISHLIST.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETEWISHLIST.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
