import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="pb-20 img-container w-screen ">
      <header className="flex   justify-center text-center pt-40   items-center">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-5xl text-3xl font-bold">{title}</h1>
          {/* <Socials /> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
