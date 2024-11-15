import React from "react";
import Chat from "@/components/chat/Chat";
import ChatInfo from "@/components/chatInfo/ChatInfo";

import chatBgImg from "@/assets/telegram-imgs/telegram-bg.jpeg";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div
      style={{ backgroundImage: `url(${chatBgImg.src})` }}
      className="grid lg:grid-cols-[4fr_3fr] duration-300"
    >
      <Chat id={id} />
      <ChatInfo />
    </div>
  );
};

export default page;
