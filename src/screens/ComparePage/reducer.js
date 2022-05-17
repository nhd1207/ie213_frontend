import { action_type as type } from './action'

const initialState = {
    loading: false,
    car: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCARBYID.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETCARBYID.SUCCESS:
            return {
                ...state,
                car: action.data,
                loading: false,
            }
        case type.GETCARBYID.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
