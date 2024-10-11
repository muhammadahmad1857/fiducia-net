export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "projectName",
      type: "string",
      title: "Project Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Mobile App Development", value: "Mobile App Development" },
          { title: "Web App Development", value: "Web App Development" },
          { title: "BlockChain Development", value: "BlockChain Development" },
        ],
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "projectName",
        maxLength: 96,
      },
    },
    {
      name: "liveLink",
      type: "url",
      title: "Live Link",
    },
    {
      name: "service", // Reference field for associating the project with a service
      title: "Service",
      type: "reference",
      to: [{ type: "services" }], // references the services document
    },
  ],
};
