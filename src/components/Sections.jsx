"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logoImage from "/public/dark-logo.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";
import HeroTopLeftImg from "/public/hero-tl.svg";
import HeroTopRightImg from "/public/hero-tr.svg";

import Statistics from "./Statistics";
import AboutUs from "./AboutUs";
import PublicSrc from "./PublicSrc";

const sections = ["Adabiyotlar", "Taqdimotlar", "Maqolalar", "Videolar"];

export default function Sections() {
  return (
    <section className="py-10">
      <div className="base-container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-5">
          Ma'lumotlar makoni
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-black flex items-center justify-center relative rounded-br-[130px] overflow-hidden"
            }
            onClick={() => {
              redirect("/drawing");
            }}
          >
            <img
              className="absolute lg:inline-block hidden right-0 bottom-0"
              src={HeroTopLeftImg.src}
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
          <div
            className={
              "cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-80 text-black flex items-center justify-center relative rounded-bl-[130px] overflow-hidden "
            }
            onClick={() => {
              redirect("/design");
            }}
          >
            <img
              className="absolute lg:inline-block hidden left-0 bottom-0"
              src={HeroTopRightImg.src}
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
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="border border-primary py-14 px-7 rounded-lg bg-primary-foreground">
            <Image
              className="w-36 h-8 inline-block mb-10"
              src={logoImage}
              alt="chizlab.uz logo"
              priority
              width="220"
              height="50"
            />
            <p className="mb-5">
              Chizmachilik va dizayn sohasidagi O'zbekistondagi ilk platforma
            </p>
            <p className="mb-5">
              Saytda chizmachilik va dizaynga oid kitob,maqola,taqdimot va
              videolar jamlangan
            </p>
            <Link
              className={buttonVariants({
                variant: "default",
              })}
              style={{
                background: "#003837",
              }}
              href="/"
            >
              Batafsil
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {sections.map((title) => {
              return (
                <div
                  className="border border-primary p-5 rounded-lg min-h-52 lg:min-h-fit flex items-center justify-center bg-primary-foreground"
                  key={title}
                >
                  <h3 className="font-medium text-2xl text-center">{title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*

     */}
      <PublicSrc />
      <AboutUs />
      <Statistics />

      {/* <Founders /> */}
      {/*

       */}
    </section>
  );
}
