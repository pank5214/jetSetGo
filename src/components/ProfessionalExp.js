import React from "react";
import  ButtonYellow from "./ButtonYellow";
import FlyImage from "../assets/fly.jpeg";

const ProfessionalExp = () => {
  return (
    <div className="h-[65%] px-20 py-[140px]">
      <div className="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px]"
            style={{
              backgroundImage: `url("${FlyImage}")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="flex">
            <ButtonYellow label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExp;
