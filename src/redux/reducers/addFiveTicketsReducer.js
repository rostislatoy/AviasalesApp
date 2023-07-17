import { actionTypes } from "../constants";

export const addFiveTicketsReducer = (state = 5, action) => {
  switch (action.type) {
    case actionTypes.ADD_MORE_TICKETS:
      return state + 5;
    default:
      return state;
  }
};
