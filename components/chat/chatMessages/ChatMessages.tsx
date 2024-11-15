import React from "react";
import ChatMessage from "../chatMessage/ChatMessage";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";

const ChatMessages = ({ chatMessages }: { chatMessages: MessageType[] }) => {
  console.log("Chat Messages", chatMessages);

  return (
    <div className="flex-grow overflow-y-auto flex flex-col-reverse">
      {chatMessages?.map((item: MessageType) => {
        return <ChatMessage key={item._id} message={item} />;
      })}
    </div>
  );
};

export default ChatMessages;
