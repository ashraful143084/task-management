import React from "react";
import TaskPagination from "./TaskPagination";
import TaskOrder from "./TaskOrder";

const FilterBar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <TaskPagination />
        <TaskOrder />
      </div>
    </>
  );
};

export default FilterBar;
