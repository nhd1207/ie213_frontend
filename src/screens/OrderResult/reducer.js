import { action_type as type } from "./action";

const initialState = {
  loading: false,
  carOrder: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.CANCELORDER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.CANCELORDER.SUCCESS:
      return {
        ...state,
        carOrder: action.OrderResult,
        loading: false,
      };
    case type.CANCELORDER.ERROR:
      return {
        ...state,
        loading: false,
        status: "error",
      };
    default:
      return state;
  }
}

export default reducer;
