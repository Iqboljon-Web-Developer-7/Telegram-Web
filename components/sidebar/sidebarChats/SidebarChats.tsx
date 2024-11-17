import React, { Suspense } from "react";
import Chats from "./Chats";
import { GET_MESSAGES_NOTIFICATIONS } from "@/sanity/lib/queries";
import { Author, Message } from "@/sanity/types";
import { auth } from "@/auth";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Session as NextAuthSession } from "next-auth";

export interface SessionWithId extends NextAuthSession {
  id: string;
}

export type MessageType = Omit<Message, "author"> & { author?: Author };

const SidebarChats = async () => {
  const session = (await auth()) as SessionWithId;

  const params = {
    id: (session as { id?: string }).id,
  };
  const { data: messages } = await sanityFetch({
    query: GET_MESSAGES_NOTIFICATIONS,
    params,
  });

  return (
    <div className="p-2 max-h-screen overflow-y-auto">
      <Chats messages={messages} authInfos={session!} />
      <SanityLive />
    </div>
  );
};

export default SidebarChats;
