import { action_type as type } from './action'

const initialState = {
    loading: false,
    posts: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETPOST.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETPOST.SUCCESS:
            return {
                ...state,
                posts: action.data,
                loading: false,
            }
        case type.GETPOST.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
