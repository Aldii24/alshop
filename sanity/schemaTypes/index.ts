import { type SchemaTypeDefinition } from "sanity";
import { shoes } from "./shoes";
import { user } from "./user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [shoes, user],
};
