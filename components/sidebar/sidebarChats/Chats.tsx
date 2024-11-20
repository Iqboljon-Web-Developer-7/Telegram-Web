// @ts-nocheck
// prevented sanity type gen issues
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { session } from "next-auth";
import { MessageType } from "./SidebarChats";
import { useDispatch } from "react-redux";
import { setMessages } from "@/redux/slices/messages";
import { setUserInfo } from "@/redux/slices/userInfo";

const Chats = ({
  messages,
  authInfos,
}: {
  messages: MessageType[];
  authInfos: session;
}) => {
  const [filteredMessages, setFilteredMessages] = useState<MessageType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const uniqueChats = new Set<string>();
    const chats = messages
      .filter((message) => {
        const otherUserId =
          message.author?._id === authInfos.id
            ? message.receiver?._id
            : message.author?._id;

        if (uniqueChats.has(otherUserId!)) {
          return false;
        }
        uniqueChats.add(otherUserId!);
        return true;
      })
      .filter(
        (message) =>
          message.author?._id === authInfos.id ||
          message.receiver?._id === authInfos.id
      );

    setFilteredMessages(chats);

    dispatch(setMessages(messages));
    dispatch(setUserInfo(authInfos));
  }, [messages, authInfos, dispatch]);

  return (
    <div className="flex flex-col gap-2">
      {filteredMessages.map((item, idx) => {
        const otherUserId =
          item.author?._id === authInfos.id ? item.receiver : item.author;

        return (
          <Link key={idx} href={`/${otherUserId?._id}`}>
            <div className="group duration-200 w-full py-3 px-4 hover:brightness-125 bg-[var(--white)] hover:bg-[var(--grey-600)] rounded-xl shadow dark:bg-[var(--grey-850)] cursor-pointer">
              <p className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] group-hover:text-[var(--purple-500)] dark:text-[var(--white)]">
                {otherUserId?.name}
              </p>
              <p className="text-[.9375rem] text-[var(--grey-600)] dark:text-gray-400 line-clamp-1">
                {item.text}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Chats;
