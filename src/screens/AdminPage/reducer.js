import { action_type as type } from './action'

const initialState = {
    loading: true,
    data: [],
}

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case type.VERIFY.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.VERIFY.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.VERIFY.ERROR:
            return {
                ...state,
                loading: true,
            }
        // case type.CREATE.REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case type.CREATE.SUCCESS:
        //     return {
        //         ...state,
        //         data: action.data,
        //         loading: false,
        //     }
        // case type.CREATE.ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        // case type.UPDATE.REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case type.UPDATE.SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        // case type.UPDATE.ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        // case type.DELETE.REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case type.DELETE.SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        // case type.DELETE.ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //     }
        default:
            return state
    }
}

export default reducer
