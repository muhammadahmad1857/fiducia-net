import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import ServicesDataType from "@/types/servicesDataType";
import RevealOnScroll from "./animations/revealOnScroll";

const fetchServices = async () => {
  const data = await client.fetch(
    `*[_type == "services"]  {
  slug { current },
  serviceName,
  description,
  icon { asset },
  color { hex }
}`,
    {},
    { cache: "no-store" }
  );
  // console.log("original", data);
  return data;
};

export default async function Services() {
  const data: ServicesDataType[] = await fetchServices();
  // console.log(data);
  return (
    <RevealOnScroll>
      <div className="relative py-24 mt-10   ">
        <img
          src="/service-bg-image.jpg"
          alt="Services Background"
          className="absolute top-0 left-0 rounded-xl -z-50 w-full h-full object-cover"
        />
        {/* <h1 className="text-4xl relative font-bold text-center text-orange-400 py-10">
            Services
          </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 place-items-center justify-items-center">
          {data?.map((item: ServicesDataType) => (
            <Link
              key={item.slug.current}
              href={`/services/${item.slug.current}`}
              className={`md:w-96 max-w-xl w-full h-40 rounded-lg overflow-hidden cursor-pointer shadow-lg`}
            >
              <div
                className="relative w-full h-full bg-blue-200 transition-all ease-in-out group"
                style={{ transitionDuration: "1200ms" }}
              >
                <div
                  className="absolute top-0 left-0 w-28 h-28 rounded-full -translate-x-1/2 -translate-y-1/2 ease-in-out transition-all group-hover:scale-[50]"
                  style={{
                    backgroundColor: item.color?.hex,
                    transitionDuration: "1200ms",
                  }}
                ></div>
                <div className="relative z-10 p-3 flex flex-col h-full">
                  <div className="flex items-start">
                    <div className="object-cover rounded-full flex items-center justify-center mr-4">
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
    </RevealOnScroll>
  );
}
