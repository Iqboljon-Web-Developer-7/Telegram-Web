"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";

const ChatNav = ({ chattingUser }: { chattingUser: { name: string } }) => {
  const dispatch = useDispatch();

  console.log("Chatting User", chattingUser);
  return (
    <div
      onClick={() => dispatch(toggleChatInfo())}
      className="py-2 px-4 bg-[var(--transparent-bg)] backdrop-blur-md cursor-pointer"
    >
      <h1 className="font-medium">{chattingUser?.name}</h1>
      <p className="text-sm text-[var(--grey-600)]">Status</p>
    </div>
  );
};

export default ChatNav;
