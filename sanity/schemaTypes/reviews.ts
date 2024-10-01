import { defineArrayMember } from "sanity";

// sanity/pet.ts
export default {
  name: "reviews",
  type: "document",
  title: "Reviews",
  fields: [
    {
        name: "userName",
        title: "UserName",
        type: "string",
      },
    {
      name: "review",
      title: "Review",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    },
    
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
