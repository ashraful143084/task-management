import React from "react";
import TaskPagination from "./TaskPagination";
import TaskOrder from "./TaskOrder";

const FilterBar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full pb-12">
        <TaskPagination />
        <TaskOrder />
      </div>
    </>
  );
};

export default FilterBar;
