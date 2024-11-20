import React, { lazy, Suspense } from "react";
import ChatInfo from "@/components/chatInfo/ChatInfo";

import chatBgImg from "@/assets/telegram-imgs/telegram-bg.jpeg";
const ChatMessages = lazy(
  () => import("@/components/chat/chatMessages/ChatMessages")
);
import ChatNav from "@/components/chat/chatNav/ChatNav";
const ChatInputBar = lazy(
  () => import("@/components/chat/chatInputBar/ChatInputBar")
);
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { GET_USER_BY_ID } from "@/sanity/lib/queries";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await auth();
  const chattingUser = await client.fetch(GET_USER_BY_ID, { id });

  return (
    <div
      style={{ backgroundImage: `url(${chatBgImg.src})` }}
      className="duration-300 flex transition-all"
    >
      <div className="main-chat-wrapper">
        <ChatNav chattingUser={chattingUser} />
        <Suspense fallback={<div className="loader"></div>}>
          <ChatMessages currentUserId={session?.id} selectedUserId={id} />
        </Suspense>
        <ChatInputBar sendTo={chattingUser?._id} />
      </div>
      <ChatInfo />
    </div>
  );
};

export default page;