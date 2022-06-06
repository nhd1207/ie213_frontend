import { action_type as type } from "./action";

const initialState = {
  loading: false,
  loading2: false,
  cars: [],
  user: [],
  models: [],
  years: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GETLISTCAR.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETLISTCAR.SUCCESS:
      return {
        ...state,
        cars: action.data.car,
        models: action.models,
        years:action.years,
        loading: false,
      };
    case type.GETLISTCAR.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.ADDCARTOWISHLIST.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.ADDCARTOWISHLIST.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.ADDCARTOWISHLIST.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.FILTER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.FILTER.SUCCESS:
      return {
        ...state,
        cars: action.docs,
        loading: false,
      };
    case type.FILTER.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.GETUSERFORWISHLISTCAR.REQUEST:
      return {
        ...state,
        loading2: true,
      };
    case type.GETUSERFORWISHLISTCAR.SUCCESS:
      return {
        ...state,
        user: action.user,
        loading2: false,
      };
    case type.GETUSERFORWISHLISTCAR.ERROR:
      return {
        ...state,
        loading2: false,
      };
    default:
      return state;
  }
}

export default reducer;
