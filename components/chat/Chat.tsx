import React from "react";
import ChatNav from "./chatNav/ChatNav";
import ChatMessages from "./chatMessages/ChatMessages";
import ChatInputBar from "./chatInputBar/ChatInputBar";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_MESSAGES_QUERY } from "@/sanity/lib/queries";

const Chat = async ({ id }: { id: string }) => {
  const params = {
    id,
  };

  const { data: chatMessages } = await sanityFetch({
    query: GET_MESSAGES_QUERY,
    params,
  });

  return (
    <div className="relative overflow-y-auto max-h-screen flex flex-col justify-between">
      <ChatNav chatMessages={chatMessages} />
      <ChatMessages chatMessages={chatMessages} />
      <ChatInputBar />
    </div>
  );
};

export default Chat;
