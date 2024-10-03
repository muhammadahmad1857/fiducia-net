export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "projectName",
      type: "string",
      title: "ProjectName",
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
  ],
};
