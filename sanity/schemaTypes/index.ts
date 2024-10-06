import { type SchemaTypeDefinition } from "sanity";
import reviews from "./reviews";
import services from "./services";
import projects from "./projects";
import technologies from "./technologies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reviews, services, projects, technologies],
};
