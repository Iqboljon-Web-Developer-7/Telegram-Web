// @ts-nocheck
// prevented sanity type gen issues

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { session } from "next-auth";
import { MessageType } from "./SidebarChats";

import ChatOpenBtn from "@/components/util/ChatOpenBtn";

const Chats = ({
  messages,
  authInfos,
}: {
  messages: MessageType[];
  authInfos: session;
}) => {
  const uniqueChats = new Set<string>();
  const chats = messages.filter((message) => {
    const otherUserId =
      message.author?._id === authInfos.id
        ? message.receiver?._id
        : message.author?._id;

    if (uniqueChats.has(otherUserId!)) {
      return false;
    }
    uniqueChats.add(otherUserId!);
    return true;
  });

  return (
    <div className="flex flex-col gap-2">
      {chats?.map((item, idx) => {
        const otherUserId =
          item.author?._id === authInfos.id ? item.receiver : item.author;
        return (
          <Link key={idx} href={`/${otherUserId?._id}`}>
            <div
              className={`sidebar__single-message group relative hover:bg-[var(--purple-500)] ${otherUserId?._id == "" ? "dark:bg-[var(--purple-500)]" : "dark:bg-[var(--grey-850)]"}`}
            >
              <ChatOpenBtn id={otherUserId?._id} idx={idx} />
              <Image
                src={otherUserId?.image}
                alt="user profile img"
                className="rounded-full flex-shrink-0 w-12 h-12"
                width={40}
                height={40}
              />
              <div>
                <p className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] dark:text-[var(--white)] duration-300">
                  {otherUserId?.name}
                </p>
                <p
                  className={`single-message__text text-[.9375rem] dark:text-[var(--grey-600)] group-hover:text-[var(--white)] line-clamp-1 duration-200 ${otherUserId?._id == "" ? "dark:text-[var(--white)]" : "text-[var(--grey-650)]"}`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Chats;
