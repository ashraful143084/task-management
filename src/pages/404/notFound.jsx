import React from "react";

const notFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className="text-red-200 text-2xl font-bold pb-3">
          404 - Not Found
        </div>
        <h1>The page you are trying to access does not exist.</h1>
      </div>
    </>
  );
};

export default notFound;
