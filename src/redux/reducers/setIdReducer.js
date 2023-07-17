import { actionTypes } from "../constants";

export const setIdReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ID:
      return action.payload;
    default:
      return state;
  }
};
