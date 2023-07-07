export const actionTypes = {
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  UPDATE_FILTER: "UPDATE_FILTER",
  TOGGLE_ALL_CHECKED: "TOGGLE_ALL_CHECKED",
  TOGGLE_NO_STOP_OVER_CHECKED: "TOGGLE_NO_STOP_OVER_CHECKED",
  TOGGLE_ONE_STOP_OVER_CHECKED: "TOGGLE_ONE_STOP_OVER_CHECKED",
  TOGGLE_TWO_STOP_OVERS_CHECKED: "TOGGLE_TWO_STOP_OVERS_CHECKED",
  TOGGLE_THREE_STOP_OVERS_CHECKED: "TOGGLE_THREE_STOP_OVERS_CHECKED",
};

export const initialFormState = {
  allChecked: false,
  noStopOverChecked: false,
  oneStopOverChecked: false,
  twoStopOversChecked: false,
  threeStopOversChecked: false,
};