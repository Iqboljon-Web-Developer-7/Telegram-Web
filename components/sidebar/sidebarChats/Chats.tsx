"use client";

import React, { useEffect, useState } from "react";
import { MessageType } from "./SidebarChats";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMessages } from "@/redux/slices/messages";
import { setUserInfo } from "@/redux/slices/userInfo";
import { session } from "next-auth";

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
    let seen: string[] = [];
    dispatch(setMessages(messages));
    dispatch(setUserInfo(authInfos));

    let filteredMessages = messages
      ?.map((item: MessageType) => {
        if (!seen.includes(item.author!._id)) {
          seen.push(item.author!._id);
          if (authInfos?.id == item.author!._id) {
            return;
          } else {
            return item;
          }
        }
      })
      .filter(
        (item): item is MessageType =>
          (item !== undefined && item.author?._id == authInfos.id) ||
          // @ts-ignore
          item?.receiver?._id == authInfos.id
      );

    setFilteredMessages(filteredMessages);
  }, [messages]);

  return (
    <div className="flex flex-col gap-2">
      {filteredMessages?.map((item: MessageType, idx: number) => {
        return (
          <Link
            key={idx}
            // @ts-ignore
            href={`/m/${item.author?._id !== authInfos.id ? item.author?._id : item.receiver!._id}`}
          >
            <div className="group duration-200 w-full py-3 px-4 hover:brightness-125 bg-[var(--white)] hover:bg-[var(--grey-600)] rounded-xl shadow dark:bg-[var(--grey-850)] cursor-pointer">
              <p className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] group-hover:text-[var(--purple-500)] dark:text-[var(--white)]">
                {item.author!.name!}
              </p>
              <p className="text-[.9375rem] text-[var(--grey-600) dark:text-gray-400 line-clamp-1">
                {item.text!}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Chats;
