import { action_type as type } from './action'

const initialState = {
    loading: false,
    user: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
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
