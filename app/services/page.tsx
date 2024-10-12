import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ServicesDataType from "@/types/servicesDataType";
import { TechnologyType } from "@/types/technologyType";
import Link from "next/link";
import Header from "@/components/header";

const fetchServices = async () => {
  const query = `*[_type == "services"] {
    serviceName,
    description,
    icon { asset },
    color { hex },
    slug { current }
  }`;
  return await client.fetch(query);
};

const fetchTechnologies = async () => {
  const query = `*[_type == "technologies"] | order(_createdAt asc) {
    technologyName,
    image { asset }
  }`;
  return await client.fetch(query);
};

const Services = async () => {
  const services: ServicesDataType[] = await fetchServices();
  const technologies: TechnologyType[] = await fetchTechnologies();

  return (
    <div className="text-center">
      <Header title="Services And Our Technologies" />

      {/* Services Section */}
      <div className="w-screen max-w-screen-2xl px-4 py-8">
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 place-items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug.current}`}
                key={service.serviceName}
                className="w-full max-w-sm"
              >
                <div className="bg-white text-black hover:text-white rounded-lg hover:bg-orange-300 transition-all duration-500 shadow-md p-6 group overflow-hidden hover:shadow-lg  flex flex-col items-center h-full">
                  <div
                    className="p-4 rounded-full relative mb-4"
                    style={{ backgroundColor: service.color.hex }}
                  >
                    <img
                      src={urlFor(service.icon.asset._ref).url()}
                      alt={service.serviceName}
                      className="w-16 h-16 relative z-10 group-hover:scale-101"
                    />
                  </div>
                  <h3 className="text-xl capitalize font-semibold mb-2">
                    {service.serviceName}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-900 py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
            {technologies.map((tech) => (
              <div
                key={tech.technologyName}
                className="flex flex-col min-w-32 max-w-32 cursor-pointer hover:bg-orange-500 items-center border-2 border-white/30 rounded-lg p-2 hover:scale-125 transition-all duration-500"
              >
                <img
                  src={urlFor(tech.image.asset._ref).url()}
                  alt={tech.technologyName}
                  className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-sm text-center text-white">
                  {tech.technologyName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-800 mt-16 text-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-4">Contact Us</p>
          <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer cutting-edge solutions tailored to your needs. Our team of
            experts uses the latest technologies to deliver high-quality,
            efficient, and scalable services that help your business grow and
            succeed in the digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
