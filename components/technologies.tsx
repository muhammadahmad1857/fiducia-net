import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TechnologyType } from "@/types/technologyType";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const fetchTechnologies = async () => {
  const data = await client.fetch(
    `*[_type == "technology"] {technologyName, image {asset}}`
  );
  return data;
};

const Technologies = async () => {
  const data = await fetchTechnologies();
  
  return (
    <div className="bg-main-dark flex md:flex-row flex-col items-center md:justify-between justify-center py-10 px-5">
      {/* Technology Logos */}
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((item: TechnologyType) => (
          <div
            key={item.technologyName}
            className="w-16 h-16 relative group rounded-full bg-white flex items-center justify-center overflow-hidden"
          >
            {/* Primary Image */}
            <img
              src={urlFor(item.image.asset._ref).url()}
              alt={item.technologyName}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Overlay Layers */}
            <div className="absolute inset-0 bg-main-TEXT opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-main-TEXT opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow"></div>
          </div>
        ))}
      </div>

      {/* Information and Stats */}
      <div className="flex flex-col space-y-3 md:w-1/2">
        <h1 className="text-white max-md:text-center text-4xl font-bold">
          Technology Capabilities
        </h1>
        <p className="text-white max-md:text-center text-xl">
          We use aspires to enhance the productivity and growth of your business
          by providing &apos;Smart Solutions&apos; and &apos;Digitally Transforming&apos; your
          business processes. Using latest state-of-the-art Technologies, we&apos;re
          providing the following services to bring life in your product.
        </p>

        {/* Stats with Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button className="w-10 p-2 aspect-square group rounded-full bg-orange-500 flex items-center justify-center">
            <FaArrowRight
              color="white"
              className="group-hover:translate-x-2 transition-all duration-500"
              size={20}
            />
          </button>
          <h3 className="text-white text-xl font-bold">100% Average Customer Satisfaction</h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 p-2 aspect-square group rounded-full bg-orange-500 flex items-center justify-center">
            <FaArrowRight
              color="white"
              className="group-hover:translate-x-2 transition-all duration-500"
              size={20}
            />
          </button>
          <h3 className="text-white text-xl font-bold">70.3% Net Promoter Score</h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 p-2 aspect-square group rounded-full bg-orange-500 flex items-center justify-center">
            <FaArrowRight
              color="white"
              className="group-hover:translate-x-2 transition-all duration-500"
              size={20}
            />
          </button>
          <h3 className="text-white text-xl font-bold">174 Active World-class Clients</h3>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
