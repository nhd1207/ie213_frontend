import { action_type as type } from "./action";

const initialState = {
  loading: false,
    data: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GETCARHHISTORY.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETCARHHISTORY.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case type.GETCARHHISTORY.ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default reducer;
