"use client";

import React from "react";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";
import { useDispatch } from "react-redux";
import Image from "next/image";

const ChatNav = ({
  chattingUser,
}: {
  chattingUser: { name: string; image: string };
}) => {
  const dispatch = useDispatch();
  return (
    <div
      // Open or close chat info section
      onClick={() => dispatch(toggleChatInfo())}
      className="w-full border-b border-[var(--border-purple)] flex items-center justify-start gap-4 py-2 px-5 bg-[var(--transparent-bg)] backdrop-blur-md cursor-pointer"
    >
      <Image
        src={chattingUser?.image}
        alt="user profile img"
        className="rounded-full flex-shrink-0 w-10 h-10"
        width={40}
        height={40}
      />
      <div>
        <h1 className="font-medium leading-tight">{chattingUser?.name}</h1>
        <p className="text-sm text-[var(--grey-600)] leading-tight">Status</p>
      </div>
    </div>
  );
};

export default ChatNav;
