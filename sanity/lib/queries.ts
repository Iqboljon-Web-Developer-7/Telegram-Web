import { defineQuery } from "next-sanity";

export const GET_MESSAGES_QUERY = defineQuery(`
  *[
    _type == "message" &&
    (
      (author -> _id == $currentUserId && receiver -> _id == $selectedUserId) || 
      (author -> _id == $selectedUserId && receiver -> _id == $currentUserId)
    )
  ] | order(_createdAt desc) {
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

export const GET_MESSAGES_NOTIFICATIONS = defineQuery(`
    *[
    _type == "message" && author -> _id == $currentUserId || receiver -> _id == $currentUserId] | order(_createdAt desc) {
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

export const GET_ALL_USERS = defineQuery(`
  *[_type == "author" && _id != $id]{
  _id, name, image, username, email, bio
 }
`);
