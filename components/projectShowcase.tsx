import { client } from "@/sanity/lib/client";
import React from "react";
import ProjectsType from "@/types/projectsType";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const fetchProjects = async (): Promise<ProjectsType[]> => {
  const data = await client.fetch(
    `*[_type == "projects"]  {
      slug { current },
      projectName,
      description,
      image { asset },
      category,
    }`,
    {},
    { cache: "no-store" }
  );
  return data.slice(0, 5);
};

const ProjectShowcase = async () => {
  const data: ProjectsType[] = await fetchProjects();
  return (
    <div className="my-10 md:px-10 px-2 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((project, index: number) => {
          let columnSpan = "col-span-1"; // Default column span
          let rowSpan = "row-span-1"; // Default row span

          // Determine the class based on index or other criteria
          if (index === 0) {
            columnSpan = "col-span-2"; // First item takes 2 columns
          } else if (index === 1) {
            rowSpan = "row-span-2"; // Second and third items take 2 rows
          } else if (index === 2) {
            rowSpan = "row-span-2"; // Second and third items take 2 rows
          } else if (index === 3) {
            columnSpan = "col-span-1"; // Fourth item takes 1 column (default)
          } else if (index === 4) {
            columnSpan = "col-span-2"; // Fifth item takes 3 columns
          }

          return (
            <Link
              href={`/projects#${project.slug.current}`}
              key={project.slug.current}
              className={`relative rounded-lg max-lg:h-[500px] lg:min-h-[500px] overflow-hidden group max-lg:col-span-1 max-lg:row-span-1 ${columnSpan} ${rowSpan}`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 "
                src={urlFor(project.image.asset._ref).url()}
                alt={project.projectName}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end items-start text-white p-4">
                <p className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {project.category}
                </p>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{project.projectName}</h1>
                  <svg
                    className="w-6 h-6 mt-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
