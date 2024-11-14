import React from "react";
import Chats from "./Chats";
import { client } from "@/sanity/lib/client";
import { GET_MESSAGES_QUERY } from "@/sanity/lib/queries";
import { Author, Message } from "@/sanity/types";
import { auth } from "@/auth";
import { sanityFetch } from "@/sanity/lib/live";

export type MessageType = Omit<Message, "author"> & { author?: Author };

const SidebarChats = async () => {
  const { data: messages } = await sanityFetch({ query: GET_MESSAGES_QUERY });

  // const messages = await client
  //   .withConfig({ useCdn: false })
  //   .fetch(GET_MESSAGES_QUERY);

  const session = await auth();

  return (
    <div>
      <Chats messages={messages} authInfos={session} />
    </div>
  );
};

export default SidebarChats;
