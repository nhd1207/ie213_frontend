import { action_type as type } from "./action";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {},
  response: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
        response: action.response,
      };
    case type.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case type.LOGIN.ERROR:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case type.VERIFY.REQUEST:
      return {
        ...state,
        loading: true,
        response: action.response,
      };
    case type.VERIFY.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action?.data || {},
        response: action.response,
      };
    case type.VERIFY.ERROR:
      return {
        ...state,
        loading: false,
        response: action.response,
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
    case type.LAYOUT.REQUEST:
      return {
        ...state,
        loading: true,
        response: action.response,
      };
    case type.LAYOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        response: action.response,
      };
    case type.LAYOUT.ERROR:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    default:
      return state;
  }
}

export default reducer;
