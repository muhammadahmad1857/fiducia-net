"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`flex w-full bg-bgColor h-14 border-b border-white/30 items-center justify-between fixed text-white md:relative top-0  md:px-10 px-2 z-50 py-2  md:py-10 transition-all duration-300`}
      >
        <Link href={"/"}>
          {" "}
          <img src="/logo.png" alt="logo" className="w-12 h-12  " />
        </Link>
        <div className="md:flex gap-10 hidden">
          <Link
            href={"/projects"}
            className="text-white p-2 -translate-y-1 hover:-translate-y-2 text-center rounded-full  hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-TEXT active:text-main-TEXT transition-all duration-500"
          >
            Our Work
          </Link>

          <Link
            href={"/services"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full  hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-TEXT active:text-main-TEXT transition-all duration-500"
          >
            Our Services
          </Link>
          <Link
            href={"/about"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full  hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-TEXT active:text-main-TEXT transition-all duration-500"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full   transition-all duration-500 border-main-TEXT shadow-lg hover:shadow-2xl shadow-blue-600 hover:shadow-blue-700 hover:text-main-light "
          >
            Let&apos;s talk
          </Link>
        </div>
        <button
          className={`md:hidden block  rounded-lg ${isOpen && "bg-main"}`}
        >
          <Hamburger
            toggle={setIsOpen}
            toggled={isOpen}
            color="white"
            size={20}
            duration={0.8}
          />
        </button>
      </nav>

      {/* Drawer for small screens */}
      <div
        className={`fixed w-full bg-black  bottom-0  top-14 md:hidden block text-white z-40 transition-transform duration-500 ${
          isOpen ? "translate-y-0  border-main-light" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center  justify-center h-full gap-8 -mt-5 p-5">
          <Link
            href={"/projects"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            Our Work
          </Link>
          <Link
            href={"/services"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            Our Services
          </Link>
          <Link
            href={"/about"}
            className="text-white opacity-100 transition-all duration-500 hover:text-main-dark text-2xl"
          >
            About
          </Link>

          <Link
            href={"/contact"}
            className="text-white rounded-full  p-2 text-center transition-all duration-500 border-main-TEXT shadow-lg hover:shadow-2xl shadow-blue-600 hover:shadow-blue-700 hover:text-main-light text-2xl"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
