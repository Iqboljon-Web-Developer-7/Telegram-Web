import React from "react";
import ChatNav from "./chatNav/ChatNav";
import ChatMessages from "./chatMessages/ChatMessages";
import ChatInputBar from "./chatInputBar/ChatInputBar";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_MESSAGES_QUERY, GET_USER_BY_ID } from "@/sanity/lib/queries";
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";

const Chat = async ({ id }: { id: string }) => {
  const session = await auth();

  console.log("Session", session);

  const params = {
    // @ts-ignore
    currentUserId: session?.id,
    selectedUserId: id,
  };

  const { data: chatMessages } = await sanityFetch({
    query: GET_MESSAGES_QUERY,
    params,
  });

  const chattingUser = await client.fetch(GET_USER_BY_ID, { id });

  return (
    <div className="relative w-full overflow-y-auto max-h-screen h-screen flex flex-col justify-between">
      <ChatNav chattingUser={chattingUser} />
      <ChatMessages chatMessages={chatMessages} />
      <ChatInputBar sendTo={chattingUser?._id} />
    </div>
  );
};

export default Chat;
