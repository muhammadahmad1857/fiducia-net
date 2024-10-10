import Header from "@/components/header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProjectsType from "@/types/projectsType";
import React from "react";
import { FaExternalLinkAlt, FaTag } from "react-icons/fa";

// Function to fetch the project data based on the slug
const fetchProject = async (slug: string) => {
  try {
    const projects: ProjectsType[] = await client.fetch(
      `*[_type == "projects" && slug.current == $slug]`,
      { slug }
    );
    return projects.length > 0 ? projects[0] : null; // Return the first project or null
  } catch (error) {
    console.error(error);
    return null; // Return null in case of error
  }
};

const Project: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const project = await fetchProject(params.slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-3xl font-bold text-main-TEXT bg-gray-100 px-8 py-4 rounded-lg shadow-md">
          Project not found
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header title={project.projectName} />
      <div className="container mx-auto py-16 md:px-10 px-2">
        <div className="bg-gray-300 shadow-lg shadow-gray-400 rounded-2xl overflow-hidden">
          <div className="relative h-[60vh] group flex items-center justify-center">
            <img
              src={urlFor(project.image.asset._ref).url()}
              alt={project.projectName}
              className="w-[calc(100%-40px)] h-[calc(100%-40px)] object-cover rounded-lg"
            />
            <div className="absolute inset-5 group-hover:opacity-100 transition-opacity duration-1000 opacity-0 bg-black bg-opacity-40 flex items-end rounded-lg">
              <div className="w-full p-6">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {project.projectName}
                </h1>
                <div className="flex items-center space-x-2 text-gray-200">
                  <FaTag className="text-yellow-400" />
                  <p className="text-xl font-semibold">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col items-center justify-center">
            <p className="text-xl text-center text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex justify-center items-center bg-blue-500 text-white font-bold text-lg w-full max-w-xs px-8 py-4 rounded-lg transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Visit Live Site
              <FaExternalLinkAlt className="ml-2 group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
