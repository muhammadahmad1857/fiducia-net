"use client";
import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed right-5 z-10 bottom-5 h-12 w-12
        flex items-center justify-center
        bg-white rounded-full
        shadow-lg hover:bg-gray-200
        transition-all duration-500 ease-in-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <FaArrowCircleUp
        size={24}
        className="transition-transform text-orange-500 duration-300 ease-in-out group-hover:scale-110"
      />
    </button>
  );
};

export default ScrollButton;
