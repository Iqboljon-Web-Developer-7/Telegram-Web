"use client";

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";
import { ArrowLeft } from "lucide-react";

const ChatNav = ({
  chattingUser,
}: {
  chattingUser: { name: string; image: string; status: string };
}) => {
  const dispatch = useDispatch();

  const handleCLick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("backBtn")) {
      const messages = document.querySelector(".messages");
      messages?.classList.remove("active");
    } else {
      dispatch(toggleChatInfo());
    }
  };

  return (
    <div
      onClick={handleCLick}
      className="w-full border-b border-[var(--border-purple)] flex items-center justify-start gap-4 py-2 px-2 sm:px-5 bg-[var(--transparent-bg)] backdrop-blur-md cursor-pointer"
    >
      <Button
        className="backBtn flex sm:hidden p-1 hover:bg-[var(--black-600)] w-9 h-9 rounded-full text-4xl"
        variant={"link"}
      >
        <ArrowLeft className="scale-125" size={50} />
      </Button>
      <Image
        src={chattingUser?.image || "defaultImg"}
        alt="user profile img"
        className="rounded-full flex-shrink-0 w-10 h-10"
        width={40}
        height={40}
      />
      <div>
        <h1 className="font-medium leading-tight">{chattingUser?.name}</h1>
        <p className="text-sm text-[var(--grey-600)] leading-tight">
          {chattingUser?.status}
        </p>
      </div>
    </div>
  );
};

export default ChatNav;
