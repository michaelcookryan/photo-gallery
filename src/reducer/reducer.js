import { ADD_GALLERY, LOADING } from "../constants/action-types";

const initialState = {
  galleries: [],
  loading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_GALLERY:
      return {
        ...state,
        galleries: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
