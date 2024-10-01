"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`flex w-full mb-2 max-md:bg-bgColor md:backdrop-blur-lg h-14 border-b border-white/30 items-center justify-between  md:justify-around text-white relative top-0 z-50 max-md:px-2 py-2  md:py-6 transition-all duration-300`}
      >
        <h1 className="text-3xl  -translate-y-1 text-white">Logo</h1>
        <div className="md:flex gap-10 hidden">
          <Link
            href={"/"}
            className="text-white p-2 -translate-y-1 hover:-translate-y-2 text-center rounded-full border-2 hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-dark active:text-main-dark transition-all duration-500"
          >
            Benefits
          </Link>
          <Link
            href={"/"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full border-2 hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-dark active:text-main-dark transition-all duration-500"
          >
            Our Work
          </Link>
          <Link
            href={"/"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full border-2 hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-dark active:text-main-dark transition-all duration-500"
          >
            Our Services
          </Link>
          <Link
            href={"/"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full border-2 hover:shadow-blue-600 hover:border-main-TEXT hover:shadow-lg hover:text-main-dark active:text-main-dark transition-all duration-500"
          >
            FAQ
          </Link>
          <Link
            href={"/"}
            className="text-white p-2 text-center -translate-y-1 hover:-translate-y-2  rounded-full border-2  transition-all duration-500 border-main-TEXT shadow-lg hover:shadow-2xl shadow-blue-600 hover:shadow-blue-700 hover:text-main-light "
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
        className={`fixed w-full bg-black bottom-0  top-14 md:hidden block text-white z-40 transition-transform duration-500 ${
          isOpen
            ? "translate-y-0 border-2 border-main-light"
            : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-5 p-5">
          <Link
            href={"/"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            Benefits
          </Link>
          <Link
            href={"/"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            Our Work
          </Link>
          <Link
            href={"/"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            Our Services
          </Link>
          <Link
            href={"/"}
            className="text-white transition-all duration-500 hover:text-main-dark text-2xl"
          >
            FAQ
          </Link>
          <Link
            href={"/"}
            className="text-white rounded-full border-2 p-2 text-center transition-all duration-500 border-main-TEXT shadow-lg hover:shadow-2xl shadow-blue-600 hover:shadow-blue-700 hover:text-main-light text-2xl"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
