/* eslint-disable no-case-declarations */
import { actionTypes } from "../constants";

const initialFormState = {
  filters: [
    { name: "all", text: "Все", isActive: true },
    { name: "noStopOver", text: "Без пересадок", isActive: true },
    { name: "oneStopOver", text: "1 пересадка", isActive: true },
    { name: "twoStopOvers", text: "2 пересадки", isActive: true },
    { name: "threeStopOvers", text: "3 пересадки", isActive: true },
  ],
};

export const formReducer = (state = initialFormState, action) => {
  const { name } = action.payload || {};

  switch (action.type) {
    case actionTypes.TOGGLE_FILTER_CHECKED_TEST:
      const updatedFilters1 = state.filters.map((filter) =>
        filter.name === name
          ? { ...filter, isActive: !filter.isActive }
          : filter,
      );
      const allFiltersChecked = updatedFilters1
        .slice(1)
        .every((filter) => filter.isActive);
      const allFilter = updatedFilters1.find((filter) => filter.name === "all");
      if (allFilter && allFilter.isActive !== allFiltersChecked) {
        allFilter.isActive = allFiltersChecked;
      }
      return {
        ...state,
        filters: updatedFilters1,
      };
    case actionTypes.TOGGLE_ALL_CHECKED_TEST:
      const updatedAllFilter = {
        ...state.filters[0],
        isActive: action.payload,
      };
      const updatedFilters2 = state.filters.map((filter, index) =>
        index === 0
          ? updatedAllFilter
          : { ...filter, isActive: action.payload },
      );
      return {
        ...state,
        filters: updatedFilters2,
      };
    default:
      return state;
  }
};
