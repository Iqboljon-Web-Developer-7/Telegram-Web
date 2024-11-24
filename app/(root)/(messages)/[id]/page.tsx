import React, { lazy, Suspense } from "react";
import chatBgImg from "@/assets/telegram-imgs/telegram-bg.jpeg";

const ChatMessages = lazy(
  () => import("@/components/chat/chatMessages/ChatMessages")
);
const ChatNav = lazy(() => import("@/components/chat/chatNav/ChatNav"));
import ChatInfo from "@/components/chatInfo/ChatInfo";
import ChatInputBar from "@/components/chat/chatInputBar/ChatInputBar";
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { GET_USER_BY_ID } from "@/sanity/lib/queries";
import Loading from "./Loading";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await auth();
  // const chattingUser = await client
  //   .withConfig({ useCdn: false })
  //   .fetch(GET_USER_BY_ID, { id });

  const { data: chattingUser } = await sanityFetch({
    query: GET_USER_BY_ID,
    params: { id },
  });

  return (
    <div
      style={{ backgroundImage: `url(${chatBgImg.src})` }}
      className={`messages h-[100dvh] duration-300 flex transition-all fixed sm:static delay-200 active`}
    >
      <div className="main-chat-wrapper">
        <Suspense fallback={<Loading />}>
          <ChatNav chattingUser={chattingUser} />
        </Suspense>
        <Suspense fallback={<div className="loader"></div>}>
          <ChatMessages currentUserId={session!.id} selectedUserId={id} />
        </Suspense>
        <ChatInputBar sendTo={chattingUser?._id} />
        <SanityLive />
      </div>
      <ChatInfo />
    </div>
  );
};

export default page;
