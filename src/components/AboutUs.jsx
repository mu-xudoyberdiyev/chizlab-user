import React from "react";
import BottomLeftImg from "/public/aboutUsLeft.svg";
import { aboutInfo } from "@/constants";

function AboutUs() {
  return (
    <div className="base-container pt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal my-16">
        Biz haqimizda
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutInfo.map(({ title, disc }, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-lg relative min-h-[250px] px-5 md:min-h-[371px] rounded-xl md:px-10 py-11 border border-black  flex flex-col gap-4"
            >
              <img
                src={BottomLeftImg.src}
                alt=""
                className="absolute bottom-0 hidden md:flex right-0 w-28 aspect-square"
              />
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                {title}
              </h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 whitespace-pre-line">
                {disc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
