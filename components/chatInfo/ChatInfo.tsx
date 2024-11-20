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
      className={`chat-info-wrapper ${active == "open" ? "inset-[0_0_0_auto] animate-expandWidth" : "inset-[0_-100%_0_auto] animate-shrinkdWidth"}`}
    >
      <div className="chat-info-inner">
        <ChatInfoNav />
        <AboutChat />
        <ChatData />
      </div>
    </div>
  );
};

export default ChatInfo;
