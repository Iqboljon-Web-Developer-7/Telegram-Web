import React from "react";
import ChatInfoNav from "./chatInfoNav/ChatInfoNav";
import AboutChat from "./aboutChat/AboutChat";
import ChatData from "./chatData/ChatData";

import chatInfoBg from "@/assets/telegram-imgs/chatInfo-bg.jpeg";

const ChatInfo = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chatInfoBg.src})` }}
      className="z-10 w-full sm:w-80 lg:w-auto bg-cover fixed inset-[0_0_0_auto] lg:static shadow-xl sm:shadow-[var(--purple-550)] lg:shadow-transparent duration-300"
    >
      <div className="h-full bg-[#00000033] backdrop-blur-md p-4">
        <ChatInfoNav />
        <AboutChat />
        <ChatData />
      </div>
    </div>
  );
};

export default ChatInfo;
