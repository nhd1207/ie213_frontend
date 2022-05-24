import { action_type as type } from './action'

const initialState = {
    loading: true,
    user: {},
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.VERIFY.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.VERIFY.SUCCESS:
            return {
                ...state,
                data: action.user,
                loading: false,
            }
        case type.VERIFY.ERROR:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default reducer
