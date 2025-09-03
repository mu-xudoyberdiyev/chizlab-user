"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Cross1Icon,
  EnterIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import KBD from "./KBD";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/lib/zustand";
import Logo from "./Logo";
import TestMode from "./TestMode";

function Header() {
  const searchInput = useRef(null);
  const { setMobileNavbar, mobileNavbar } = useAppStore();
  useEffect(() => {
    function handlePress(e) {
      if ((e.metaKey && e.keyCode === 75) || (e.ctrlKey && e.keyCode === 75)) {
        e.preventDefault();
        searchInput.current.focus();
      }
    }

    if (searchInput) {
      window.addEventListener("keydown", handlePress);
    }

    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, []);

  function handleClick() {
    setMobileNavbar();
  }

  return (
    <div>
      <TestMode />
      <header
        className={`lg:py-5 py-3 relative transition-colors duration-300 z-50 bg-white sm:bg-transparent border-b ${
          mobileNavbar ? "border-b-slate-200" : "border-transparent"
        }`}
      >
        <div className="base-container flex items-center justify-between md:justify-center">
          <div className="flex justify-center items-center gap-5">
            <Logo type="header" />
            {/* 
            <div className="relative  lg:block ">
              <Input
                className="bg-white"
                ref={searchInput}
                type="search"
                placeholder="Qidiruv..."
              />
              <KBD
                text="K"
                className="absolute right-2 top-2/4 -translate-y-2/4"
              ></KBD>
            </div> */}
          </div>

          {/* <div className="hidden sm:flex items-center gap-5">
            <Button variant="outline">
              <span className="md:inline hidden">Ro'yhatdan o'tish</span>
              <PersonIcon className="inline md:hidden" />
            </Button>
            <Button className="bg-expensive-green text-white">
              <span className="md:inline hidden">Kirish</span>
              <EnterIcon className="inline md:hidden" />
            </Button>
          </div> */}

          <Button
            onClick={handleClick}
            className="sm:hidden"
            size="icon"
            variant="outline"
          >
            {mobileNavbar ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
