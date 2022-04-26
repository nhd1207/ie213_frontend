import { action_type as type } from './action'

const initialState = {
    loading: false,
    posts: [],
    cars: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCAR.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETCAR.SUCCESS:
            return {
                ...state,
                cars: action.data,
                loading: false,
            }
        case type.GETCAR.ERROR:
            return {
                ...state,
                loading: false,
            }
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
