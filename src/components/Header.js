import React from "react";
import FlayInnImage from "../assets/flyinn.jpeg";
import ButtonYellow from "./ButtonYellow";
import FlightBookingForm from "./FlightBookingForm";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div
      className="w-full h-[80%] bg-red-300 bg-contain"
      style={{
        backgroundImage: `url("${FlayInnImage}")`,
      }}
    >
      <HeaderNav />
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
          <div>
            <p className="text-white text-xl">JET SET GO</p>
            <p className="text-white text-5xl">We Are Very Reliable</p>
            <p className="text-yellow-400 text-5xl">
              Professional, Experienced
            </p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">Flyinn budget</span> is the
              versatile website expowering you
            </p>
            <p className="text-white text-sm">
              full services airline offering{" "}
              <span className="text-yellow-400">reduce fairs.</span>
            </p>
            <ButtonYellow label={"FIND FLIGHT"} extraStyle={"flex mt-5"} />
          </div>
        </div>
        <div className="flex">
          <FlightBookingForm />
        </div>
      </div>
    </div>
  );
};

export default Header;
