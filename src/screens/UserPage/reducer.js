import { action_type as type } from './action'

const initialState = {
    loading: false,
    user: [],
    bills: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETINFOUSER.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETINFOUSER.SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
            }
        case type.GETINFOUSER.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETLISTBILL.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETLISTBILL.SUCCESS:
            return {
                ...state,
                bills: action.data,
                loading: false,
            }
        case type.GETLISTBILL.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.UPDATEUSER.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.UPDATEUSER.SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
            }
        case type.UPDATEUSER.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
