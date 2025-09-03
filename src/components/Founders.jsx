import { foundersInfo } from "@/constants";
import Link from "next/link";
import React from "react";
import BottomRight from "/public/hero-tl.svg";

function Founders() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal my-16">
        Sayt ijodkorlari
      </h2>
      {/* comment */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">

        {foundersInfo.map(
          ({ Fullname, position, work, logo, contacts }, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg relative min-h-[300px] sm:min-h-[350px] md:min-h-[480px] px-5 md:px-10 py-6 sm:py-8 lg:py-11 border border-gray-300 flex rounded-[30px] flex-col justify-between gap-4"
              >
                {/* Logo */}
                {/*  */}
                <img
                  src={logo.src}
                  //   comment
                  alt={`${Fullname}'s logo`}
                  className="xl:absolute top-5 sm:top-10 rounded-full border-2 object-contain block md:flex right-10 w-14 sm:w-28 aspect-square"
                />
                {/* Bottom Right Icon */}
                <img
                  src={BottomRight.src}
                  alt="icon"
                  className="absolute hidden xl:block bottom-0 right-0 w-32 h-32 "
                />
                {/* Name */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary whitespace-pre-line">
                  {Fullname}
                </h4>
                {/* Position */}
                <p className="sm:text-xl text-gray-700">{position}</p>
                {/* Work Description */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 whitespace-pre-line">
                  {work}
                </p>

                {/* Social Contacts */}
                <div className="flex gap-4 mt-4 flex-wrap justify-start">
                  {contacts.map(({ img, LinkHref, tooltip }, index) => {
                    return (
                      <Link
                        key={index}
                        href={LinkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <img
                          className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 transform group-hover:scale-110"
                          src={img.src}
                          alt={tooltip}
                        />
                        <span className="sr-only">{tooltip}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Founders;
