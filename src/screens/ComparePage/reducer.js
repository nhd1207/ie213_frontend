import { action_type as type } from "./action";

const initialState = {
  loading: false,
  cars: [],
  compareCar: [],
  car1: {},
  car2: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GETLISTCOMPARE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETLISTCOMPARE.SUCCESS:
      return {
        ...state,
        cars: action.data,
        loading: false,
      };
    case type.GETLISTCOMPARE.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.COMPARETWOCAR.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.COMPARETWOCAR.SUCCESS:
      return {
        ...state,
        compareCar: action.data,
        loading: false,
      };
    case type.COMPARETWOCAR.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.GETCAR1.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETCAR1.SUCCESS:
      return {
        ...state,
        car1: action.data,
        loading: false,
      };
    case type.GETCAR1.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.GETCAR2.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETCAR2.SUCCESS:
      return {
        ...state,
        car2: action.data,
        loading: false,
      };
    case type.GETCAR2.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
