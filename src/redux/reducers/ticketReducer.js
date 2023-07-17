import { actionTypes } from "../constants";

export const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      if (!action.payload.length) {
        return state;
      }
      return [...state, ...action.payload];
    default:
      return state;
  }
};
