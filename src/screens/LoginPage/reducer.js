import { action_type as type } from "./action";

const initialState = {
  loading: false,
  user: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.LOGIN.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.VERIFY.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.VERIFY.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action?.data || {},
      };
    case type.VERIFY.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.USER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.USER.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.USER.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
