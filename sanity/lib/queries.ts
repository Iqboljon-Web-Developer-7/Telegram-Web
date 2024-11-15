import { defineQuery } from "next-sanity";

export const GET_MESSAGES_QUERY = defineQuery(`
  *[_type == "message" && receiver -> _id == $id || author -> _id == $id] | order(_createdAt desc){
    author -> {
      _id, name, image, bio
    },
    receiver -> {
      _id, name, image, bio
    },
    _id,
    text,
   _createdAt
}
`);

// export const GET_CHAT_MESSAGES = defineQuery(`
//   *[_type == "message" && receiver -> _id == $id || author -> _id == $id] | order(_createdAt desc){
//     author -> {
//       _id, name, image, bio
//     },
//     receiver -> {
//       _id, name, image, bio
//     },
//     _id,
//     text,
//    _createdAt
// }`);

export const GET_MESSAGES_NOTIFICATIONS = defineQuery(`
    *[_type == "message" && receiver -> _id == $id || author -> _id == $id] | order(_createdAt desc){
      author -> {
        _id, name, image, bio
      },
      receiver -> {
        _id, name, image, bio
      },
      _id,
      text,
      _createdAt
}
  `);

export const GET_USER_BY_ID = defineQuery(`
  *[_type == "author" && id == $id][0]{
    _id, id, name, username,email, image, bio
  }
`);
