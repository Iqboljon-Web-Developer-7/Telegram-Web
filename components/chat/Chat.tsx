import React from "react";
import ChatNav from "./chatNav/ChatNav";
import ChatMessages from "./chatMessages/ChatMessages";
import ChatInputBar from "./chatInputBar/ChatInputBar";

const Chat = () => {
  return (
    <div>
      <ChatNav />
      <ChatMessages />
      <ChatInputBar />
    </div>
  );
};

export default Chat;
