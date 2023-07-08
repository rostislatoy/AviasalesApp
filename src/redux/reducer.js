import { de } from "date-fns/locale";
import { actionTypes, initialFormState } from "./constants";

export const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const filterReducer = (state = "cheapest", action) => {
  if (state === undefined) {
    return "cheapest";
  }
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ALL_CHECKED:
      return {
        ...state,
        allChecked: !state.allChecked,
        noStopOverChecked: !state.allChecked,
        oneStopOverChecked: !state.allChecked,
        twoStopOversChecked: !state.allChecked,
        threeStopOversChecked: !state.allChecked,
      };
    case actionTypes.TOGGLE_NO_STOP_OVER_CHECKED:
      return {
        ...state,
        noStopOverChecked: !state.noStopOverChecked,
        allChecked: false,
      };
    case actionTypes.TOGGLE_ONE_STOP_OVER_CHECKED:
      return {
        ...state,
        oneStopOverChecked: !state.oneStopOverChecked,
        allChecked: false,
      };
    case actionTypes.TOGGLE_TWO_STOP_OVERS_CHECKED:
      return {
        ...state,
        twoStopOversChecked: !state.twoStopOversChecked,
        allChecked: false,
      };
    case actionTypes.TOGGLE_THREE_STOP_OVERS_CHECKED:
      return {
        ...state,
        threeStopOversChecked: !state.threeStopOversChecked,
        allChecked: false,
      };
    default:
      return state;
  }
};

export const addFiveTicketsReducer = (state = 5, action) => {
  switch (action.type) {
    case "ADD_MORE_TICKETS":
      return state + 5;
    default:
      return state;
  }
};

export const stopFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCH_STOP":
      return (state = action.payload);
    default:
      return state;
  }
};
