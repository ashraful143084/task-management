import { DisplaySkeleton } from "@/components/DisplaySkeleton";
import FilterBar from "@/components/FilterBar";
import TaskCard from "@/components/TaskCard";
import TaskCounter from "@/components/TaskCounter";
import TaskSideBar from "@/components/TaskSideBar";
import { TasksContext } from "@/context/task.context";
import { useFetchTask } from "@/hooks/useFetchTask.hook.js";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

const Tasks = () => {
  const [order] = useState("asc");
  const [limit] = useState(10);
  const [page] = useState(1);

  const { setTasks } = useContext(TasksContext);

  const { data } = useFetchTask({
    limit,
    page,
    order,
  });

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  return (
    <>
      <section className="flex w-full p-4 gap-8 max-lg:flex-col-reverse mt-[50px]">
        <section className="flex max-lg:w-full basis-2/3 h-40 w-full justify-center">
          <div className="flex w-10/12 flex-col p-4">
            <div className="flex flex-col mb-5">
              <h1 className="text-white text-4xl max-lg:text-2xl font-bold pb-12">
                Tasks as on: Wednesday, 25 April 2025
              </h1>
              <div className="flex justify-between w-full items-center">
                <TaskCounter type="todo" counter="10" />
                <TaskCounter type="inProgress" counter="12" />
                <TaskCounter type="completed" counter="22" />
              </div>
            </div>
            <div className="mt-10">
              <FilterBar />

              {!data &&
                [...Array(limit)].map((_entry, index) => (
                  <DisplaySkeleton key={index} />
                ))}

              {data &&
                data.data.map((task, key) => (
                  <TaskCard
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                    dueDate={new Date(task.dueDate)}
                    key={key}
                  />
                ))}
            </div>
          </div>
        </section>

        <section className="flex basis-1/3 w-full max-lg:w-full">
          <TaskSideBar />
        </section>
      </section>
    </>
  );
};

export default Tasks;
