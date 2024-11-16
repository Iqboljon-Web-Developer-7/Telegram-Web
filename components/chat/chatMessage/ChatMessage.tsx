import React from "react";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";

const ChatMessage = ({ message }: { message: MessageType }) => {
  return (
    <div className="bg-[var(--grey-850)] w-fit py-2 px-3 rounded-2xl">
      {message.text}
    </div>
  );
};

export default ChatMessage;
