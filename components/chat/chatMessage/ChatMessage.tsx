"use client";

import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import React from "react";

const ChatMessage = ({
  currentUserId,
  item,
}: {
  currentUserId: string;
  item: MessageType;
}) => {
  return (
    <div
      className={`w-fit max-w-[85%] py-2 px-3 rounded-2xl  ${currentUserId == item?.author?._id ? "bg-[var(--purple-550)] self-end rounded-br-none" : "bg-[var(--grey-850)] rounded-bl-none"}`}
    >
      {item?.text}
    </div>
  );
};

export default ChatMessage;
