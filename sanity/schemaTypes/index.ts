import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { message } from "./message";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, message],
};
