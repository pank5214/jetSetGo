import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { Email_Link } from "../constants/AppConstants";
import SocialMedia from "./SocialMedia";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex justify-center h-14">
        <div className="flex items-center">
          <BiPhoneCall size={20} />
          <p className="text-sm ml-2">+91-9829343601</p>
          <span className="text-sm ml-12 gap-2">
            <a
              href={Email_Link}
              className="w-22 h-22 flex items-center gap-2 text-center"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail />
              <p>pankajkumar5214@gmail.com</p>
            </a>
          </span>
        </div>
      </div>
      <div className="ml-[29rem]">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactUs;
