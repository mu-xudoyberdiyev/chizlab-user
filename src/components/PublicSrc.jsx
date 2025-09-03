import React from "react";
import { publicResurs } from "@/constants";
import HeroTopLeftImg from "/public/hero-tl.svg";
import HeroTopRightImg from "/public/hero-tr.svg";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function PublicSrc() {
  return (
    <div className="base-container pt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-5">
        Ommabop resurslar
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
        <div
          className={
            "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-black flex items-center justify-center relative rounded-br-[130px] overflow-hidden"
          }
          onClick={() => {
            redirect("/design");
          }}
        >
          <img
            className="absolute lg:inline-block hidden right-0 bottom-0"
            src={HeroTopLeftImg.src}
          />
          <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
            Dizayn
          </h3>
          <Link
            className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
            href="/design"
          >
            Olami
            <ArrowRightIcon />
          </Link>
        </div>

        <div
          className={
            "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-80 text-black flex items-center justify-center relative rounded-bl-[130px] overflow-hidden "
          }
          onClick={() => {
            redirect("/drawing");
          }}
        >
          <img
            className="absolute lg:inline-block hidden left-0 bottom-0"
            src={HeroTopRightImg.src}
          />

          <h3 className="text-2xl text-center text-semibold uppercase group-hover:text-primary line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
            Chizmachilik
          </h3>
          <Link
            className="flex items-center gap-2 text-xl md:text-2xl absolute bottom-3 left-2/4 -translate-x-2/4 text-black group-hover:text-primary"
            href="/drawing"
          >
            Olami
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {publicResurs.map((value, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer hover:shado-wg  hover:scale-105 border border-primary bg-expensive-green rounded-xl flex-col group h-[200px] lg:h-[330px] text-black flex items-center justify-center relative overflow-hidden  ${value.borderRadius} `}
              onClick={() => {
                redirect(`${value.href}`);
              }}
            >
              <img
                className={`absolute lg:inline-block hidden ${value.position} bottom-0`}
                src={value.img.src}
                alt={`${value.title} rasmi`}
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-normal text-white  line-clamp-1">
                {value.title}
              </h3>
              <Link
                className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-white"
                href={value.href}
              >
                <img
                  className={`absolute lg:inline-block hidden ${value.position} bottom-0`}
                  src={value.img.src}
                  alt={`${value.title} rasmi`}
                />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-normal text-white group-hover:text-primary line-clamp-1">
                  {value.title}
                </h3>
              </Link>
              <Link
                className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-white group-hover:text-primary"
                href={value.href}
              >
                Ko'rish
                <ArrowRightIcon />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PublicSrc;
