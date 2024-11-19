import { Sneaker } from "@phosphor-icons/react/dist/ssr";
import { defineField, defineType } from "sanity";

export const shoes = defineType({
  name: "shoes",
  title: "Shoes",
  type: "document",
  icon: Sneaker,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.min(1).max(50).required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "size",
      type: "array",
      of: [{ type: "number" }],
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
