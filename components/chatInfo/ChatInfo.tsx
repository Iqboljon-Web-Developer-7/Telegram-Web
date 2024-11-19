"use client";

import React from "react";
import ChatInfoNav from "./chatInfoNav/ChatInfoNav";
import AboutChat from "./aboutChat/AboutChat";
import ChatData from "./chatData/ChatData";

import chatInfoBg from "@/assets/telegram-imgs/chatInfo-bg.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

const ChatInfo = () => {
  const active = useSelector((state: RootState) => state.chatInfoToggle.value);

  return (
    <div
      style={{ backgroundImage: `url(${chatInfoBg.src})` }}
      className={`z-10 bg-cover flex-shrink-0 ${active == "open" ? "fixed inset-[0_0_0_auto] lg:static animate-expandWidth" : "fixed inset-[0_-100%_0_auto]"} shadow-xl shadow-[var(--purple-500)] duration-300 lg:duration-200`}
    >
      <div className="h-full bg-[var(--transparent-bg)] backdrop-blur-md p-4">
        <ChatInfoNav />
        <AboutChat />
        <ChatData />
      </div>
    </div>
  );
};

export default ChatInfo;
