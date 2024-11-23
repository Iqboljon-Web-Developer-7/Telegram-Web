import React, { lazy, Suspense } from "react";
import ChatInfo from "@/components/chatInfo/ChatInfo";

import chatBgImg from "@/assets/telegram-imgs/telegram-bg.jpeg";
const ChatMessages = lazy(
  () => import("@/components/chat/chatMessages/ChatMessages")
);
const ChatNav = lazy(() => import("@/components/chat/chatNav/ChatNav"));
import ChatInputBar from "@/components/chat/chatInputBar/ChatInputBar";
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
      className={`messages h-[100dvh] duration-300 flex transition-all fixed sm:static delay-150`}
    >
      <div className="main-chat-wrapper">
        <Suspense fallback={"Loading..."}>
          <ChatNav chattingUser={chattingUser} />
        </Suspense>
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
