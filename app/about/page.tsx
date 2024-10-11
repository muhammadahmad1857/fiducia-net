import React from "react";
import Header from "@/components/header";
import ChooseUs from "@/components/choose-us";
import Socials from "@/components/socials";

const About = () => {
  return (
    <>
      <Header title="About Us" />
      <div>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Our Story
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-orange-300">
              We are a team of passionate blockchain innovators, dedicated to
              revolutionizing digital trust and transparency through
              cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-800 rounded-lg p-8 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border border-orange-500/20 cursor-pointer">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                Our Mission
              </h2>
              <p className="text-lg text-orange-200">
                To empower businesses and individuals with secure, efficient,
                and transparent blockchain solutions that drive innovation and
                foster trust in the digital ecosystem.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border border-orange-500/20 cursor-pointer">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                Our Vision
              </h2>
              <p className="text-lg text-orange-200">
                To lead the blockchain revolution, shaping a future where
                decentralized systems enhance security, efficiency, and
                transparency across all industries.
              </p>
            </div>
          </div>

          <ChooseUs />

          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              What We Do
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-orange-300">
              We specialize in developing cutting-edge blockchain solutions
              tailored to meet the unique needs of our clients. Our services
              include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
              {[
                "Custom blockchain development",
                "Smart contract creation and auditing",
                "Decentralized application (DApp) development",
                "Blockchain consulting and strategy",
                "Integration of blockchain with existing systems",
                "Tokenization and ICO services",
              ].map((service, index) => (
                <li
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-orange-500/20 text-orange-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">
              Connect With Us
            </h3>
            <div className="flex justify-center">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
