"use client";

import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaAddressBook,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: 10000,
    message: "",
  });

  // Function to get the background color based on the budget
  const getSliderBackground = () => {
    const percentage = (formData.budget - 10000) / (100000 - 10000);
    const colorStart = percentage < 0.5 ? "#ff9c2a" : "#ff5e00"; // Light to Dark orange transition
    const colorEnd = percentage < 0.5 ? "#4b5563" : "#4b5563"; // Dark gray as the end color
    return `linear-gradient(to right, ${colorStart} 0%, ${colorStart} ${percentage * 100}%, ${colorEnd} ${percentage * 100}%, ${colorEnd} 100%)`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "budget" ? Number(value) : value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Header title="Contact Us" />
      <div className="  py-16 w-screen max-w-screen-2xl px-4 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-12 text-center text-orange-400">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-orange-400 flex items-center">
              <FaAddressBook className="mr-2" /> Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  Phone
                </h3>
                <div className="flex items-center group cursor-pointer">
                  <FaPhone className="text-orange-400 mr-4 text-xl group-hover:text-orange-300 transition-colors" />
                  <span className="group-hover:text-orange-300 transition-colors">
                    +1 (123) 456-7890
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  Email
                </h3>
                <div className="flex items-center group cursor-pointer">
                  <FaEnvelope className="text-orange-400 mr-4 text-xl group-hover:text-orange-300 transition-colors" />
                  <a
                    href="mailto:info@example.com"
                    className="hover:text-orange-300 transition-colors"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  LinkedIn
                </h3>
                <div className="flex items-center group cursor-pointer">
                  <FaLinkedin className="text-orange-400 mr-4 text-xl group-hover:text-orange-300 transition-colors" />
                  <a
                    href="https://www.linkedin.com/company/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  WhatsApp
                </h3>
                <div className="flex items-center group cursor-pointer">
                  <FaWhatsapp className="text-orange-400 mr-4 text-xl group-hover:text-orange-300 transition-colors" />
                  <span className="group-hover:text-orange-300 transition-colors">
                    +1 (987) 654-3210
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  Address
                </h3>
                <div className="flex items-center group cursor-pointer">
                  <FaMapMarkerAlt className="text-orange-400 mr-4 text-xl group-hover:text-orange-300 transition-colors" />
                  <Link
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-300 transition-colors"
                  >
                    123 Example Street, City, State 12345
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-orange-400 flex items-center">
              <FaComments className="mr-2" /> Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-orange-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-orange-400 focus:outline-none text-white transition-colors "
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-orange-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-orange-400 focus:outline-none text-white transition-colors "
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-orange-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-orange-400 focus:outline-none text-white transition-colors "
                />
              </div>
              <div>
                <label htmlFor="budget" className="block mb-2 text-orange-300">
                  Budget: ${formData.budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  id="budget"
                  name="budget"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ background: getSliderBackground() }}
                />
                <div className="flex justify-between text-sm mt-1 text-orange-300">
                  <span>$10,000</span>
                  <span>$100,000</span>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-orange-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-orange-400 focus:outline-none text-white resize-none transition-colors "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-gray-900 py-2 px-4 rounded hover:bg-orange-500 transition-colors font-semibold hover:shadow-lg cursor-pointer duration-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
