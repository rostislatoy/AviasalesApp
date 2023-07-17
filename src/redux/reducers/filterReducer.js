import { actionTypes } from "../constants";

export const filterReducer = (state = "cheapest", action) => {
  if (state === undefined) {
    return "cheapest";
  }
  switch (action.type) {
    case actionTypes.UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
