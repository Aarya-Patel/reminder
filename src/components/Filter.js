import React from "react";

const Filter = ({ changeFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filter"> Filter: </label>
      <select id="filter" type="text" onInput={changeFilter}>
        <option value="All">All</option>
        <option value="Starred">Starred</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default Filter;
