import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import React from "react";

const ChatMessage = ({ message }: { message: MessageType }) => {
  return <div className="bg-[var(--grey-800)]">{message.text}</div>;
};

export default ChatMessage;
