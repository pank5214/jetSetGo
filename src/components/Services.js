import React from "react";
import CoinImage from "../assets/coin.png";

const Services = () => {
  const ServiceItems = () => {
    return (
      <div className="mt-5 p-4 w-[45%] bg-gray-200 rounded-lg shadow-md">
        <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
          <img src={CoinImage} className="w-[20px] h-[20px]" alt="coinImage" />
        </div>
        <p className="text-black text-lg mt-2">Price Beating Guarantee</p>
        <div className="w-[200px] mt-1">
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[60%] px-20 py-8">
      <div className="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-lg">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br></br>You Use
            <span className="text-[#3781c5]">
              {" "}
              Our <br></br>Services
            </span>
          </p>
          <div>

          <ServiceItems />
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-20">
            <ServiceItems />
            <ServiceItems />
          </div>
          <div className="flex justify-between gap-20">
            <ServiceItems />
            <ServiceItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
