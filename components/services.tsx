import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import ServicesDataType from "@/types/servicesDataType";
const fetchServices = async () => {
  const data = await client.fetch(
    `*[_type == "services"] | order(_createdAt asc) {
  slug { current },
  serviceName,
  description,
  icon { asset },
  color { hex }
}`,
    {},
    { cache: "no-store" }
  );
  console.log("original", data);
  return data;
};

export default async function Services() {
  const data: ServicesDataType[] = await fetchServices();
  console.log(data);
  return (
    <div className=" md:px-10 px-2  my-10">
      <h1 className="text-4xl font-bold text-center mb-10">Services</h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  ">
        {data?.map((item: ServicesDataType) => (
          <Link
            key={item.slug.current}
            href={`/services/${item.slug.current}`}
            className="md:w-96 max-w-xl w-full sm:w-72 h-40 rounded-lg overflow-hidden cursor-pointer shadow-lg"
          >
            <div className="relative w-full h-full bg-gray-400 transition-all duration-[1200ms] ease-in-out group">
              <div
                className="absolute top-0 left-0 w-28 h-28  rounded-full -translate-x-1/2 -translate-y-1/2 ease-in-out transition-all duration-[1200ms] group-hover:scale-[50]"
                style={{ backgroundColor: item.color?.hex }}
              ></div>
              <div className="relative z-10 p-3 flex flex-col h-full">
                <div className="flex items-start">
                  <div className=" object-cover rounded-full flex items-center justify-center mr-4">
                    <img
                      src={urlFor(item.icon.asset._ref).url()}
                      alt={item.serviceName}
                    />
                  </div>
                  <div className="mt-1 text-center md:ml-0 ml-3">
                    <h3 className="text-xl font-semibold capitalize text-gray-800 group-hover:text-white transition-colors duration-1000">
                      {item.serviceName}
                    </h3>
                    <p className="text-base mt-2 md:mt-8 capitalize text-gray-600 group-hover:text-white transition-colors duration-1000">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
