import { type SchemaTypeDefinition } from "sanity";
import pet from "./pet";
import reviews from "./reviews";
import services from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet,reviews,services],
};
