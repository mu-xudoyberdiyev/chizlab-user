"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import HeroTopLeftImg from "/public/hero-tl.png";
import HeroTopRightImg from "/public/hero-tr.png";
import HeroBottomLeftImg from "/public/hero-bl.png";
import HeroBottomRightImg from "/public/hero-br.png";

export default function Hero() {
  // console.log(HeroTopLeftImg);

  return (
    <section className="py-10">
      <div className="base-container grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          className="cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-primary-foreground flex items-center justify-center relative rounded-br-[130px] overflow-hidden"
          onClick={() => {
            redirect("/literatures");
          }}
        >
          <img
            className="absolute lg:inline-block hidden right-0 bottom-0"
            src={HeroTopLeftImg.src}
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center text-semibold uppercase line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              Adabiyotlar
            </h2>
            <Link
              className="inline-flex items-center gap-2 text-primary"
              href={"/literatures"}
            >
              Ro'yhati
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-primary-foreground flex items-center justify-center relative rounded-bl-[130px] overflow-hidden"
          onClick={() => {
            redirect("/presantations");
          }}
        >
          <img
            className="absolute lg:inline-block hidden left-0 bottom-0"
            src={HeroTopRightImg.src}
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center text-semibold uppercase line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              Taqdimotlar
            </h2>
            <Link
              className="inline-flex items-center gap-2 text-primary"
              href={"/articles"}
            >
              Ro'yhati
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-primary-foreground flex items-center justify-center relative rounded-tr-[130px] overflow-hidden"
          onClick={() => {
            redirect("/articles");
          }}
        >
          <img
            className="absolute lg:inline-block hidden right-0 top-0"
            src={HeroBottomLeftImg.src}
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center text-semibold uppercase line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              Maqolalar
            </h2>
            <Link
              className="inline-flex items-center gap-2 text-primary"
              href={"/articles"}
            >
              Ro'yhati
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer border border-primary bg-white rounded-xl group min-h-52 md:min-h-40 lg:min-h-56 text-primary-foreground flex items-center justify-center relative rounded-tl-[130px] overflow-hidden"
          onClick={() => {
            redirect("/videos");
          }}
        >
          <img
            className="absolute lg:inline-block hidden left-0 top-0"
            src={HeroBottomRightImg.src}
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center text-semibold uppercase line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              Videolar
            </h2>
            <Link
              className="inline-flex items-center gap-2 text-primary"
              href={"/videos"}
            >
              Ro'yhati
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
