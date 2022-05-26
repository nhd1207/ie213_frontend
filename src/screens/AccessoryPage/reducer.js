import { action_type as type } from './action'

const initialState = {
    loading: false,
    accessories: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETACCESSORY.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETACCESSORY.SUCCESS:
            return {
                ...state,
                accessories: action.data.accessory,
                loading: false,
            }
        case type.GETACCESSORY.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.ADDACCESSORYTOWISHLIST.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.ADDACCESSORYTOWISHLIST.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.ADDACCESSORYTOWISHLIST.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.FILTER.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case type.FILTER.SUCCESS:
            return {
                ...state,
                accessories: action.docs,
                loading: false,
            };
        case type.FILTER.ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}

export default reducer
