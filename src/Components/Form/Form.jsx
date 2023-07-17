import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAllCheckedTest,
  toggleFilterCheckedTest,
} from "../../redux/actions";
import "./Form.scss";

export default function Form() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { filters } = formState;

  const handleCheckedChange = (name) => {
    dispatch(toggleFilterCheckedTest(name));
  };

  const handleToggleAllChecked = () => {
    const allFiltersActive = filters
      .slice(1)
      .every((filter) => filter.isActive);
    const updatedFilters = filters.map((filter, index) =>
      index === 0
        ? { ...filter, isActive: !allFiltersActive }
        : { ...filter, isActive: !allFiltersActive },
    );
    dispatch(toggleAllCheckedTest(!allFiltersActive));
    const updatedAllFilter = {
      ...updatedFilters[0],
      isActive: !allFiltersActive,
    };
    const updatedFilters2 = updatedFilters.map((filter, index) =>
      index === 0 ? updatedAllFilter : filter,
    );
    dispatch({ type: "UPDATE_FILTERS", payload: updatedFilters2 });
  };

  useEffect(() => {
    if (filters) {
      const allFiltersActive = filters
        .slice(1)
        .every((filter) => filter.isActive);

      const updatedFilters = filters.map((filter, index) =>
        index === 0 ? { ...filter, isActive: allFiltersActive } : filter,
      );

      dispatch({ type: "UPDATE_FILTERS", payload: updatedFilters });
    }
  }, [filters, dispatch]);

  return (
    <form className="form">
      <h6 className="form-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
      <label>
        <input
          type="checkbox"
          checked={filters[0].isActive}
          onChange={handleToggleAllChecked}
        />
        <span className="checkbox label"></span>
        <span className="checkbox-label">{filters[0].text}</span>
      </label>
      {filters.slice(1).map((filter) => (
        <label key={filter.name}>
          <input
            type="checkbox"
            checked={filter.isActive}
            onChange={() => handleCheckedChange(filter.name)}
          />
          <span className="checkbox label"></span>
          <span className="checkbox-label">{filter.text}</span>
        </label>
      ))}
    </form>
  );
}
