import React from "react";

const Header = () => {
  return (
    <div className="pb-40 relative w-screen h-[500px]">
      <img
        src="/bg-video.gif"
        alt="Header Background"
        className="absolute rounded-xl top-0 left-0 w-full h-full object-fill"
      />
    </div>
  );
};

export default Header;
