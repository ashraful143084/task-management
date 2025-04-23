import FilterBar from "@/components/FilterBar";
import TaskCounter from "@/components/TaskCounter";
import React from "react";

const tasks = () => {
  return (
    <>
      <section className="flex w-full p-4 gap-8 max-lg:flex-col-reverse">
        <section className="flex max-lg:w-full basis-2/3 h-40 w-full justify-center">
          <div className="flex w-10/12 flex-col p-4">
            <div className="flex flex-col mb-5">
              <h1 className="text-white text-2xl font-bold pb-8">
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
            </div>
          </div>
        </section>

        <section className="flex basis-1/3 h-40 bg-red-400 w-full max-lg:w-full">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptate tempore qui corporis doloribus numquam ipsa architecto
          assumenda sequi, ipsam molestiae eveniet quas minima quia? Iure autem
          voluptatem quos soluta sint laudantium consequatur recusandae officia!
          Laborum eligendi voluptatem earum doloribus, quis ipsum error
          praesentium architecto quos, saepe, ducimus exercitationem vel.
        </section>
      </section>
    </>
  );
};

export default tasks;
