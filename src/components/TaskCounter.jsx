import React from "react";

const TaskCounter = ({ type = "todo", counter = 0 }) => {
  return (
    <>
      <div className={`flex flex-col justify-center items-center`}>
        <div
          className={`border-2 ${type === "todo" && "border-red-600"} ${
            type == "inProgress" && "border-orange-500"
          } ${
            type === "completed" && "border-green-600"
          } rounded-full p-6 mb-4`}
        >
          <div className="min-w-10 min-h-10 text-center flex justify-center items-center text-white text-3xl leading-10">
            {counter}
          </div>
        </div>
        {type === "todo" && <div>Todo</div>}
        {type === "inProgress" && <div>In Progress</div>}
        {type === "completed" && <div>Completed</div>}
      </div>
    </>
  );
};

export default TaskCounter;
