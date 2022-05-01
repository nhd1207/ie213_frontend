import { action_type as type } from './action'

const initialState = {
    loading: false,
    user: []
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
                user: action.data,
                loading: false,
            }
        case type.GETUSER.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
