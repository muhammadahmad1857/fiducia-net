"use client";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
const ChooseUs = () => {
  return (
    <div className="flex flex-col md:px-10 px-2 gap-10 text-center items-center justify-center py-20  ">
      <h2 className="sm:text-4xl text-3xl text-main-TEXT  font-bold text-center">
        Why Choose Us
      </h2>
      <p className="sm:text-lg text-base text-center text-white">
        We are a team of experienced professionals who are dedicated to
        providing the best service to our clients.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 grid-card  place-items-center justify-items-center gap-10 ">
        <div className="choose-us-card group">
          <h3 className="choose-us-card-title ">Our Purpose</h3>
          <p className="text-lg text-white">
            We empower trust through secure blockchain solutions. Our goal is to
            simplify digital systems with transparency.
          </p>
        </div>
        <div className="choose-us-card group">
          <h3 className="choose-us-card-title">Our Aspiration</h3>
          <p className="text-lg text-white">
            We envision a future where trust drives digital interactions.
            Leading blockchain innovation to reshape industries.
          </p>
        </div>
        <div className="choose-us-card md:col-span-2 xl:col-span-1 group">
          <h3 className="choose-us-card-title">Our Guiding Principles</h3>
          <MDEditor.Markdown
            className="markdown"
            source={`
- *Trust:* Creating transparent and secure solutions.  
- *Innovation:* Pioneering new blockchain advancements.
- *Accountability:* Delivering reliable and resilient services.  
- *Collaboration:* Building success through strong partnerships.
`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
