"use client";

import React, { useEffect } from "react";
import { MessageType } from "../sidebar/sidebarChats/SidebarChats";

const SentMessage = ({ chatMessages }: { chatMessages: MessageType[] }) => {
  useEffect(() => {
    const manuallyAddedMessage = document.querySelector(".chatMessage");
    manuallyAddedMessage?.remove();
  }, [chatMessages]);

  return <div></div>;
};

export default SentMessage;
