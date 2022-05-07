import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: {},
    message: ""
}

function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case type.GETPOST.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETPOST.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.GETPOST.ERROR:
            return {
                ...state,
                loading: false,
                message: action.message,
            }
        default:
            return state
    }
}

export default reducer
