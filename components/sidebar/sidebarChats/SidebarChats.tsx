import React from "react";
import Chats from "./Chats";
import { GET_MESSAGES_NOTIFICATIONS } from "@/sanity/lib/queries";
import { Author, Message } from "@/sanity/types";
import { auth } from "@/auth";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export type MessageType = Omit<Message, "author"> & { author?: Author };

const SidebarChats = async () => {
  const session = await auth();

  const params = {
    currentUserId: session.id,
  };

  const { data: messages } = await sanityFetch({
    query: GET_MESSAGES_NOTIFICATIONS,
    params,
  });

  console.log("Messages sidebar", messages);
  console.log(session);

  return (
    <div className="p-2 max-h-screen overflow-y-auto">
      <Chats messages={messages} authInfos={session!} />
      <SanityLive />
    </div>
  );
};

export default SidebarChats;
