import React from "react";
import ChatInfoNav from "./chatInfoNav/ChatInfoNav";
import AboutChat from "./aboutChat/AboutChat";
import ChatData from "./chatData/ChatData";

const ChatInfo = () => {
  return (
    <div>
      <ChatInfoNav />
      <AboutChat />
      <ChatData />
    </div>
  );
};

export default ChatInfo;
