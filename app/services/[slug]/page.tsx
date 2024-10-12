"use client";

import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ServicesDataType from "@/types/servicesDataType"; // Adjust the path if necessary
import NotFoundTemplate from "@/components/404-template"; // Ensure this component exists
import { FaTools, FaProjectDiagram, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";

type Props = {
  params: { slug: string };
};

type ProjectType = {
  title: string;
  description: string;
  image: { asset: { _ref: string } };
  slug: { current: string };
};

const fetchServiceAndProjects = async (slug: string) => {
  const query = `*[_type == "services" && slug.current == $slug][0] {
    serviceName,
    description,
    icon { asset },
    color { hex },
    "projects": *[_type == "projects" && references(^._id)] {
      title,
      description,
      image { asset },
      slug
    }
  }`;

  const service = await client.fetch(query, { slug });
  return service;
};

export default async function ServicePage({ params }: Props) {
  const service: ServicesDataType & { projects: ProjectType[] } =
    await fetchServiceAndProjects(params.slug);

  if (!service) {
    return (
      <NotFoundTemplate
        title="Service Not Found"
        desc="Sorry, we couldn't find the service you're looking for."
        url="/services"
        urlText="Back to Services"
        Icon={FaTools}
      />
    );
  }

  return (
    <>
    <Header title={service.serviceName}/>
    <div className=" px-4 py-16 bg-gray-900 text-white min-h-screen">
      {/* Service Info */}
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 mb-12 transition-all duration-300 hover:shadow-2xl border border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="sm:text-4xl text-2xl font-bold text-orange-400 mb-4">
              {service.serviceName}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {service.description}
            </p>
          </div>
          {service.icon?.asset && (
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{ backgroundColor: service.color?.hex || "#2d3748" }}
            >
              <img
                src={urlFor(service.icon.asset._ref).url()}
                alt={service.serviceName}
                className="w-24 h-24 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="sm:text-4xl text-2xl font-bold mb-8 text-center flex items-center justify-center text-orange-400">
          <FaProjectDiagram className="text-orange-400 mr-2" />
          Projects in this Category
        </h2>

        {service.projects && service.projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.projects.map((project) => (
              <div
                key={project.slug.current}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700 cursor-pointer"
              >
                <img
                  src={urlFor(project.image.asset._ref).url()}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {project.description.length > 100
                      ? `${project.description.substring(0, 100)}...`
                      : project.description}
                  </p>
                  <Link href={`/projects/${project.slug.current}`}>
                    <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Click to view project <FaChevronRight className="ml-2" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 text-center p-12 rounded-lg mt-12 shadow-lg border border-gray-700">
            <FaTools className="text-5xl text-gray-400 mx-auto mb-4" />
            <p className="text-2xl font-semibold text-orange-400">
              No projects found for this category.
            </p>
            <p className="text-gray-400 mt-2">Check back later for updates!</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
