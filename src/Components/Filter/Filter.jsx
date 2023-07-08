import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/actions";

import "./Filter.scss";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterClick = (newFilter) => {
    dispatch(updateFilter(newFilter));
  };

  return (
    <div className="filter-list">
      <button
        className={`filter-button ${filter === "cheapest" ? "selected" : ""}`}
        onClick={() => handleFilterClick("cheapest")}
      >
        Самый дешевый
      </button>
      <button
        className={`filter-button ${filter === "fastest" ? "selected" : ""}`}
        onClick={() => handleFilterClick("fastest")}
      >
        Самый быстрый
      </button>
      <button
        className={`filter-button ${filter === "optimal" ? "selected" : ""}`}
        onClick={() => handleFilterClick("optimal")}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Filter;
