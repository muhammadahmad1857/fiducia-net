import React from "react";
import EmailSender from "./emailSender";

const NewsLetterForm = () => {
  return (
    <div className="text-white py-6 relative overflow-hidden flex flex-col justify-around w-full max-w-xl  border border-white/30 rounded-lg bg-main-dark p-3 px-6 shadow-lg shadow-blue-600/50">
      <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-main-TEXT before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-400 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
        <p className="font-extrabold max-md:text-center text-2xl text-main-TEXT">
          Get more updates...
        </p>
        <p className="text-white/80 max-md:text-center">
          Sign up for our newsletter and you'll be the first to find out about
          new
          <strong className="text-main-TEXT"> Services</strong>
        </p>
      </div>
      <EmailSender />
    </div>
  );
};

export default NewsLetterForm;
