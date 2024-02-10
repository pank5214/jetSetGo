import React from "react";
import { LOWEST_FARE_LIST } from "../constants/AppConstants";
import  ButtonYellow from "./ButtonYellow";

 const LowestFare = () => {
  return (
    <div className="relative h-[40%] px-20 py-8 bg-[#1a63a8]">
      <p className="text-sm text-center text-white">CURRENT FARE</p>
      <p className="text-3xl mt-1 text-center text-white">
        Today's Lowest Fare
      </p>
      <div className="flex absolute bottom-[-100px] ml-[15%]">
        {LOWEST_FARE_LIST.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white px-5 py-5 text-center mr-5 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                className="h-[150px] w-[150px] rounded-lg"
                alt="airplane"
              />
              <p className="mt-2 font-semibold">{item.heading}</p>
              <p className="text-sm">
                <span className="text-gray-400">Starting from</span>{" "}
                <span className="text-red-400 font-semibold">{item.price}</span>
              </p>
              <ButtonYellow label={"CHECK OUT NOW"} extraStyle={"mt-5"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowestFare;