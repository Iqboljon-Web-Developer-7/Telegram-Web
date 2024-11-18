"use client";

import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";
import { setMessageReceiver } from "@/redux/slices/messageReceiver";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatNav = ({ chatMessages }: { chatMessages: MessageType[] }) => {
  const [chatName, setChatName] = useState("");
  const [chatStatus, setChatStatus] = useState("");

  // @ts-ignore
  const userInfo = useSelector((state) => state?.userInfo?.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatMessages[0]?.author?._id != userInfo.id) {
      setChatName(chatMessages[0]?.author?.name!);
      dispatch(setMessageReceiver(chatMessages[0]?.author?._id!));
    } else {
      // @ts-ignore
      setChatName(chatMessages[0]?.receiver?.name!);
      // @ts-ignore
      dispatch(setMessageReceiver(chatMessages[0]?.receiver?._id!));
    }
  }, [chatMessages]);

  try {
    document.title = chatName;
  } catch (error) {}
  return (
    <div
      onClick={() => dispatch(toggleChatInfo())}
      className="py-2 px-4 bg-[var(--transparent-bg)] backdrop-blur-md cursor-pointer"
    >
      <h1 className="font-medium">{chatName}</h1>
      <p className="text-sm text-[var(--grey-600)]">Status</p>
    </div>
  );
};

export default ChatNav;
