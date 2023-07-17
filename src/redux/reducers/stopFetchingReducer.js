import { actionTypes } from "../constants";

export const stopFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STOP:
      return !state;

    default:
      return state;
  }
};
