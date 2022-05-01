import { action_type as type } from './action'

const initialState = {
    loading: false,
    user: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.SIGNUP.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.SIGNUP.SUCCESS:
            return {
                ...state,
                    loading: false,
            }
        case type.SIGNUP.ERROR:
            return {
                ...state,
                    loading: false,
            }    
        default:
            return state
    }
}

export default reducer
