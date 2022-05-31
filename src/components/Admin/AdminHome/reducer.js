import { action_type as type } from './action'

const initialState = {
    loading: false,
    user: [],
    accessoryBill: [],
    carOrder: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.ADMINDATA.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.ADMINDATA.SUCCESS:
            return {
                ...state,
                //data: action.data,
                user: action.user,
                accessoryBill: action.accessoryBill,
                carOrder:action.carOrder,
                loading: false,
            }
        case type.ADMINDATA.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
