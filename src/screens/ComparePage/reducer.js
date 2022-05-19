import { action_type as type } from './action'

const initialState = {
    loading: false,
    cars: [],
    compareCar: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETLISTCOMPARE.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETLISTCOMPARE.SUCCESS:
            return {
                ...state,
                cars: action.data,
                loading: false,
            }
        case type.GETLISTCOMPARE.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.COMPARETWOCAR.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.COMPARETWOCAR.SUCCESS:
            return {
                ...state,
                compareCar: action.data,
                loading: false,
            }
        case type.COMPARETWOCAR.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
