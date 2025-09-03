import { statistic } from "@/constants";
import React from "react";
import BottomLeftWhiteImg from "/public/hero-white-bl.svg";

function Statistics() {
  return (
    <div className="base-container pt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal my-16">
        Statistika
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statistic.map(({ title, count, position, img, imgRotate }, index) => {
          const hasRotation = imgRotate !== "none";
          console.log(title, count, position, img, imgRotate);

          return (
            <div
              key={index}
              className={`relative  h-[293px] text-black overflow-hidden rounded-br-[100px] lg:rounded-br-[12px]  bg-expensive-green md:text-white border-primary px-5 rounded-xl md:px-10 py-11 border flex flex-col items-center justify-center gap-4 ${
                hasRotation ? "lg:bg-white shadow-lg  border-black" : ""
              }`}
            >
              {hasRotation && (
                <img
                  src={img.src}
                  alt=""
                  className={`absolute  hidden lg:flex ${position} w-28 aspect-square`}
                />
              )}
              <img
                src={BottomLeftWhiteImg.src}
                alt=""
                className={`absolute bottom-2 right-2 lg:hidden flex  w-28 aspect-square`}
              />

              <h4
                className={`text-4xl sm:text-2xl md:text-3xl xl-4 2xl:text-5xl font-semibold ${
                  hasRotation ? "text-white lg:text-black" : "text-white"
                }`}
              >
                {title}
              </h4>
              <h2
                className={`text-5xl ${
                  hasRotation ? "text-white lg:text-black" : "text-white"
                } whitespace-pre-line`}
              >
                +{count}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Statistics;
