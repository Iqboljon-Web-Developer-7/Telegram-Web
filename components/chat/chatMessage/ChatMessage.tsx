import React from "react";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import { auth } from "@/auth";

const ChatMessage = async ({ message }: { message: MessageType }) => {
  const session = await auth();
  // @ts-ignore
  const { id } = session;

  return (
    <div
      className={`w-fit max-w-[85%] py-2 px-3 rounded-2xl  ${id == message?.author?._id ? "bg-[var(--purple-550)] self-end rounded-br-none" : "bg-[var(--grey-850)] rounded-bl-none"}`}
    >
      {message?.text}
    </div>
  );
};

export default ChatMessage;
