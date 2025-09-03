"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useAppStore } from "@/lib/zustand";

export function Desktop() {
  return (
    <nav className="hidden base-container sm:block pt-5 mb-10">
      <ul className="flex justify-between flex-wrap">
        {navLinks.map(({ path, text }) => {
          return (
            <li key={path}>
              <Link className={buttonVariants({ variant: "link" })} href={path}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export function Mobile() {
  const { mobileNavbar } = useAppStore();
  return (
    <div
      className={`sm:hidden duration-500 absolute w-full top-24 z-40 bg-primary-foreground p-5 transition-transform ${
        mobileNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="base-container mb-10">
        <ul className="grid grid-cols-2 w-full">
          {navLinks.map(({ path, text }) => {
            return (
              <li className="w-full" key={path}>
                <Link
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} w-full`}
                  href={path}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex w-full gap-5">
        <Button className="w-full" variant="outline">
          Ro'yhatdan o'tish
        </Button>
        <Button className="w-full">Kirish</Button>
      </div>
    </div>
  );
}
