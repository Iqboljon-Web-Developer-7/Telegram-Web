"use client";

import React from "react";
import { Pen, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleChatInfo } from "@/redux/slices/chatInfoToggle";

const ChatInfoNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex-center !justify-between">
      <div className="chatLeft flex-center gap-3">
        <X
          onClick={() => dispatch(toggleChatInfo())}
          size={32}
          className="text-[var(--grey-600)] p-1 hover:text-[var(--purple-500)] hover:brightness-150 duration-200 cursor-pointer hover:bg-[var(--grey-850)] rounded-full"
        />
        <h4 className="text-2xl font-semibold">Chat info</h4>
      </div>
      <Pen
        size={32}
        className="text-[var(--grey-600)] p-1 hover:text-[var(--purple-500)] hover:brightness-150 duration-200 cursor-pointer hover:bg-[var(--grey-850)] rounded-lg"
      />
    </div>
  );
};

export default ChatInfoNav;
