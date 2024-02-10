import React from "react";
import { Email_Link } from "../constants/AppConstants";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="h-[34%] px-20 bg-slate-600">
      <div className="grid grid-cols-4 py-5 gap-10 text-white h-[80%]">
        <div>
          <p className="text-2xl font-bold">Get Set Go</p>
          <p className="text-sm">FLIGHT</p>
          <p className="mt-5 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum{" "}
          </p>
          <SocialMedia />
        </div>
        <div>
          <p className="text-2xl font-bold">Get in Touch</p>
          <p className="text-sm">BUDGET</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Phone: +91-9829343601</p>
            <span className="text-sm ml-2 m-1 flex text-center">
              Email:
              <a
                href={Email_Link}
                className="w-22 h-22 ml-1"
                target="_blank"
                rel="noreferrer"
              >
                pankajkumar5214@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Flights</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Asia</p>
            <p className="text-sm ml-2">Africa</p>
            <p className="text-sm ml-2">Europe</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Useful Links</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Contact Us</p>
            <p className="text-sm ml-2">About Us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-white text-sm">
        <p>All Rights Reserved | © 2022 GetSetGo Flight</p>
        <p>Terms and Conditions - Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
