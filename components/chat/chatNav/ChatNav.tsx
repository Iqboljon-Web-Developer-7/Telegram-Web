"use client";

import React from "react";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";
import { useDispatch } from "react-redux";

const ChatNav = ({ chattingUser }: { chattingUser: { name: string } }) => {
  const dispatch = useDispatch();
  return (
    <div
      // Open or close chat info section
      onClick={() => dispatch(toggleChatInfo())}
      className="w-full py-2 px-4 bg-[var(--transparent-bg)] backdrop-blur-md cursor-pointer"
    >
      <h1 className="font-medium">{chattingUser?.name}</h1>
      <p className="text-sm text-[var(--grey-600)]">Status</p>
    </div>
  );
};

export default ChatNav;
