import { actionTypes } from "./constants";

export const updateFilter = (filter) => ({
  type: actionTypes.UPDATE_FILTER,
  payload: filter,
});

export const toggleAllChecked = () => ({
  type: actionTypes.TOGGLE_ALL_CHECKED,
});

export const toggleNoStopOverChecked = () => ({
  type: actionTypes.TOGGLE_NO_STOP_OVER_CHECKED,
});

export const toggleOneStopOverChecked = () => ({
  type: actionTypes.TOGGLE_ONE_STOP_OVER_CHECKED,
});

export const toggleTwoStopOversChecked = () => ({
  type: actionTypes.TOGGLE_TWO_STOP_OVERS_CHECKED,
});

export const toggleThreeStopOversChecked = () => ({
  type: actionTypes.TOGGLE_THREE_STOP_OVERS_CHECKED,
});

export const uploadTickets = (tickets) => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: tickets,
  });
};

export const addFiveTickets = () => ({
  type: actionTypes.ADD_MORE_TICKETS,
});

export const stopFetching = (stop) => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_STOP,
    payload: stop,
  });
};
export const setID = (ID) => (dispatch) => {
  dispatch({
    type: actionTypes.ID,
    payload: ID,
  });
};

export const toggleFilterChecked = (name) => {
  return {
    type: actionTypes.TOGGLE_FILTER_CHECKED,
    payload: { name },
  };
};

export const toggleAllCheckedTest = (isChecked) => {
  return {
    type: actionTypes.TOGGLE_ALL_CHECKED_TEST,
    payload: isChecked,
  };
};

export const toggleFilterCheckedTest = (name) => {
  return {
    type: actionTypes.TOGGLE_FILTER_CHECKED_TEST,
    payload: { name },
  };
};
