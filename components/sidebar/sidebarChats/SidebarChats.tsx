import React from "react";
import Chats from "./Chats";
import { auth } from "@/auth";
import { Author, Message } from "@/sanity/types";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { GET_MESSAGES_NOTIFICATIONS } from "@/sanity/lib/queries";
export type MessageType = Omit<Message, "author"> & { author?: Author };

const SidebarChats = async () => {
  const session = await auth();

  const { data: messages } = await sanityFetch({
    query: GET_MESSAGES_NOTIFICATIONS,
    params: { id: session?.id },
  });

  return (
    <div className="p-2 max-h-screen overflow-y-auto">
      <Chats messages={messages} authInfos={session!} />
      <SanityLive />
    </div>
  );
};

export default SidebarChats;
