import { action_type as type } from "./action";

const initialState = {
  loading: false,
  status: "",
  user: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.SIGNUP.REQUEST:
      return {
        ...state,
        loading: true,
        status: ""
      };
    case type.SIGNUP.SUCCESS:
      return {
        ...state,
        status: action.status,
        loading: false,
      };
    case type.SIGNUP.ERROR: 
      return {
        ...state,
        loading: false,
        status: "error"
      };
    default:
      return state;
  }
}

export default reducer;
