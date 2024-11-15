import { defineField, defineType } from "sanity";
import { MessageSquare } from "lucide-react";

export const message = defineType({
  name: "message",
  title: "Message",
  type: "document",
  icon: MessageSquare,
  fields: [
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
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
