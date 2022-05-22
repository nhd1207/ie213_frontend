import { action_type as type } from "../screens/LoginPage/action";

const initialState = {
  loading: false,
  isLoggedIn: false,
  response: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
        isLoggedIn: true,
        response: action.response,
      };
    case type.VERIFY.ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        response: action.response,
      };
    case type.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
        response: action.response,
      };
    case type.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        response: action.response,
      };
    case type.LOGOUT.ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        response: action.response,
      };
    default:
      return state;
  }
}

export default reducer;
