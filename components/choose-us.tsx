import React from "react";

const ChooseUs = () => {
  return (
    <div className="flex flex-col md:px-10 px-2 gap-10 text-center items-center justify-center py-20 bg-main-dark">
      <h2 className="sm:text-4xl text-3xl text-main-TEXT  font-bold text-center">
        Why Choose Us
      </h2>
      <p className="sm:text-lg text-base text-center text-white">
        We are a team of experienced professionals who are dedicated to
        providing the best service to our clients.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 sm:justify-items-center">
        <div className="choose-us-card group">
          <h3 className="choose-us-card-title ">Our Mission</h3>
          <p className="text-lg text-white">
            Our mission is to provide the best service to our clients, ensuring
            their cybersecurity needs are met with excellence.
          </p>
        </div>
        <div className="choose-us-card group">
          <h3 className="choose-us-card-title">Our Vision</h3>
          <p className="text-lg text-white">
            We envision a world where businesses can operate securely in the
            digital landscape, protected by cutting-edge cybersecurity
            solutions.
          </p>
        </div>
        <div className="choose-us-card md:col-span-2 lg:col-span-1 group">
          <h3 className="choose-us-card-title">Our Values</h3>
          <p className="text-lg text-white">
            Integrity, innovation, and client-centricity are at the core of
            everything we do, driving us to deliver unparalleled cybersecurity
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
