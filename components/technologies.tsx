import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TechnologyType } from "@/types/technologyType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const fetchTechnologies = async () => {
  const data = await client.fetch(
    `*[_type == "technologies"] | order(_createdAt asc) {technologyName, image {asset}}`,
    {},
    { cache: "no-store" }
  );
  return data;
};

export default async function Technologies() {
  const data = await fetchTechnologies();

  return (
    <div className="bg-main-dark flex lg:flex-row md:px-10 px-2 flex-col items-center md:justify-between justify-center py-10">
      {/* Technology Logos */}
      <div
        className="grid grid-cols-4 gap-4 place-items-center"
        style={{
          rowGap: "10px",
        }}
      >
        {data.map((item: TechnologyType, index: number) => (
          <div
            className={`sm:w-28 sm:h-28 xl:h-24 h-20 lg:h-16 lg:w-16 xl:w-24 w-20 relative group ${
              index % 2 === 1 || (index >= 4 && (index - 2) % 4 === 1)
                ? "sm:mt-16 mt-2 lg:mt-10 xl:mt-16"
                : ""
            }`}
            key={item.technologyName}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`sm:w-28 sm:h-28 lg:h-16 lg:w-16 xl:h-24 xl:w-24 h-20 w-20 relative z-10 group p-2 bg-white transition-all group-hover:scale-110 duration-500 rounded-full flex items-center justify-center`}
                  >
                    {/* Image */}
                    <img
                      src={urlFor(item.image.asset._ref).url()}
                      alt={item.technologyName}
                      className="w-full h-full  object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Border with hover effect */}
                  <div className="absolute -inset-1 z-50 rounded-full opacity-0 group-hover:opacity-100 border-2 border-orange-500 transition-opacity duration-500" />
                  {/* Border with hover effect */}
                  <div className="absolute -inset-1.5 rounded-full group-hover:scale-110 opacity-0 group-hover:opacity-40 bg-orange-300 transition-all duration-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.technologyName}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>

      {/* Information and Stats */}
      <div className="flex flex-col space-y-3 md:w-1/2 max-md:mt-20">
        <h1 className="text-white max-md:text-center text-4xl font-bold">
          Technology Capabilities
        </h1>
        <p className="text-white max-md:text-center text-xl">
          We aspire to enhance the productivity and growth of your business by
          providing &apos;Smart Solutions&apos; and &apos;Digitally
          Transforming&apos; your business processes. Using the latest
          state-of-the-art technologies, we&apos;re providing the following
          services to bring life to your product.
        </p>

        {/* Stats with Arrow Buttons */}
        {[
          "100% Average Customer Satisfaction",
          "70.3% Net Promoter Score",
          "174 Active World-class Clients",
        ].map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <button className="w-10 p-2 aspect-square group rounded-full bg-orange-500 flex items-center justify-center">
              <FaArrowRight
                color="white"
                className="group-hover:translate-x-2 transition-all duration-500"
                size={20}
              />
            </button>
            <h3 className="text-white text-xl font-bold">{stat}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
