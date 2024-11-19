import React from "react";
import ChatMessage from "../chatMessage/ChatMessage";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_CHAT_MESSAGES_QUERY } from "@/sanity/lib/queries";

const ChatMessages = async ({
  currentUserId,
  selectedUserId,
}: {
  currentUserId: string;
  selectedUserId: string;
}) => {
  // For filtering messages
  const params = {
    currentUserId,
    selectedUserId,
  };
  const { data: chatMessages } = await sanityFetch({
    query: GET_CHAT_MESSAGES_QUERY,
    params,
  });

  return (
    <div className="max-w-[44rem] w-full mx-auto px-3 overflow-y-auto flex flex-grow flex-col-reverse gap-1">
      {chatMessages?.map((item: MessageType) => {
        return <ChatMessage key={item?._id} message={item} />;
      })}
    </div>
  );
};

export default ChatMessages;
