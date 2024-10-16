import Header from "@/components/header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProjectsType from "@/types/projectsType";
import Link from "next/link";
import React from "react";

const fetchProjects = async (): Promise<ProjectsType[]> => {
  const data = await client.fetch(
    `*[_type == "projects"] | order(_createdAt desc) {
        slug { current },
        projectName,
        description,
        image { asset },
        category,
        liveLink
      }`,
    {},
    { cache: "no-store" }
  );
  return data;
};

const Projects = async () => {
  const data = await fetchProjects();
  return (
    <>
      <Header />
      <div className="w-full px-4 py-6 md:px-10">
        {/* Beautiful Heading */}
        <h1 className="text-4xl font-bold text-center text-main-TEXT my-8">
          Our Creative Projects
        </h1>

        <div className="flex flex-col items-center justify-center">
          {data.map((project, index) => (
            <div
              key={project.slug.current}
              id={project.slug.current}
              className={`w-full flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } justify-between items-center my-12 space-y-8 md:space-y-0 md:space-x-12`}
            >
              {/* Project Information */}
              <div className="flex-1 p-4 md:p-6 max-w-2xl">
                {/* Category */}
                <p className="text-md text-gray-400 font-bold mb-2 uppercase tracking-wide">
                  {project.category}
                </p>
                {/* Project Title with Live Link */}
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="text-main-TEXT transition-colors duration-500 text-3xl before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-blue-500 before:transition-all before:duration-500 before:hover:w-full font-semibold mb-4 relative group hover:text-blue-500"
                >
                  {project.projectName}
                </Link>
                {/* Project Description */}
                <p className="md:text-lg text-sm text-gray-500 mb-6 mt-2  md:leading-tight leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Image */}
              <div className="flex-1 flex items-center justify-center p-4 md:p-6">
                <img
                  src={urlFor(project.image.asset._ref).url()}
                  alt={project.projectName}
                  className="sm:w-[calc(100%-28px)] md:w-[calc(100%-12px)] aspect-square rounded-xl shadow-lg shadow-gray-400 hover:shadow-gray-600 hover:shadow-xl hover:rounded-2xl transition-all duration-300 ease-in-out  hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
