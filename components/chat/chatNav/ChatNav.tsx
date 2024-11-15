"use client";

import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ChatNav = ({ chatMessages }: { chatMessages: MessageType[] }) => {
  const [chatName, setChatName] = useState("");
  const [chatStatus, setChatStatus] = useState("");

  // @ts-ignore
  const userInfo = useSelector((state) => state.userInfo.value);

  useEffect(() => {
    chatMessages[0].author?._id != userInfo.id
      ? setChatName(chatMessages[0].author?.name!)
      : // @ts-ignore
        setChatName(chatMessages[0].receiver?.name!);
  }, [chatMessages]);
  return (
    <div className="py-2 px-4 bg-[#00000011] backdrop-blur-md">
      <h1 className="font-medium">{chatName}</h1>
      <p className="text-sm text-[var(--grey-600)]">Status</p>
    </div>
  );
};

export default ChatNav;
