import { defineField, defineType } from "sanity";
import { MessageSquare } from "lucide-react";

export const message = defineType({
  name: "message",
  title: "Message",
  type: "document",
  icon: MessageSquare,
  fields: [
    // defineField({
    //   name: "title",
    //   type: "string",
    // }),
    // defineField({
    //   name: "slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //   },
    // }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "receiver",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "text",
      type: "string",
    }),
    // defineField({
    //   name: "views",
    //   type: "number",
    // }),
    // defineField({
    //   name: "description",
    //   type: "text",
    // }),
    // defineField({
    //   name: "category",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.min(1).max(20).required().error("Please enter a category"),
    // }),
    defineField({
      name: "image",
      type: "image",
      //   validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "video",
    //   type: "video",
    // }),
    // defineField({
    //   name: "pitch",
    //   type: "markdown", // needs to be installed - sanity-plugin-markdown
    // }),
  ],
});
