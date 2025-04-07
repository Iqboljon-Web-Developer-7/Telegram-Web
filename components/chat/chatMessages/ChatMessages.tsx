import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import ChatMessage from "../chatMessage/ChatMessage";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import { GET_CHAT_MESSAGES_QUERY } from "@/sanity/lib/queries";
import SentMessage from "@/components/util/SentMessage";

const ChatMessages = async ({
  currentUserId,
  selectedUserId,
}: {
  currentUserId: string;
  selectedUserId: string;
}) => {
  // For filtering messages
  const { data: chatMessages } = await sanityFetch({
    query: GET_CHAT_MESSAGES_QUERY,
    params: {
      currentUserId,
      selectedUserId,
    },
  });

  return (
    <div className="chatMessages max-w-[44rem] w-full mx-auto px-3 overflow-y-auto flex flex-grow flex-col-reverse gap-1">
      {chatMessages?.map((item: MessageType) => {
        return (
          <ChatMessage
            key={item._id}
            currentUserId={currentUserId}
            item={item}
          />
        );
      })}
      <SentMessage chatMessages={chatMessages} />
    </div>
  );
};

export default ChatMessages;
