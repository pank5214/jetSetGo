import React from "react";

const Shimmer = () => (
  <div className="animate-pulse flex flex-row-reverse justify-between w-full">
    <div className="cursor-pointer m-2">
      <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
    </div>

    <div className="mt-6 w-full overflow-y-scroll">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          key={index}
          className="m-4 ml-32 h-32 w-9/12 bg-gray-300 shadow-md rounded-lg"
        ></div>
      ))}
    </div>
  </div>
);

export default Shimmer;
