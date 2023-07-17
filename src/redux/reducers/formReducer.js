/* eslint-disable no-case-declarations */
import { actionTypes } from "../constants";

const initialFormState = {
  allChecked: true,
  noStopOverChecked: true,
  oneStopOverChecked: true,
  twoStopOversChecked: true,
  threeStopOversChecked: true,
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
