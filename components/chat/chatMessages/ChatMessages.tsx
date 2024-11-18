import React from "react";
import ChatMessage from "../chatMessage/ChatMessage";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";

const ChatMessages = ({ chatMessages }: { chatMessages: MessageType[] }) => {
  return (
    <div className="max-w-[44rem] w-full mx-auto px-3 overflow-y-auto flex flex-grow flex-col-reverse gap-1">
      {chatMessages?.map((item: MessageType) => {
        return <ChatMessage key={item?._id} message={item} />;
      })}
    </div>
  );
};

export default ChatMessages;
