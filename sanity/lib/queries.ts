import { defineQuery } from "next-sanity";

export const GET_MESSAGES_QUERY = defineQuery(`
  *[_type == "message"]{
    author -> {
      _id, name, image, bio
    },
    receiver -> {
      _id, name, image, bio
    },
    text
}
`);
