"use client";

import ChatOpenBtn from "@/components/util/ChatOpenBtn";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Chat = ({
  otherUserId,
  text,
  idx,
}: {
  otherUserId?: { _id: string; image: string; name: string } | any;
  text?: string;
  idx: number;
}) => {
  // Ensure fallback values for undefined properties
  const userId = otherUserId?._id || "defaultId";
  const userImage = otherUserId?.image || "/default-image.png";
  const userName = otherUserId?.name || "Unknown User";

  return (
    <Link key={userId} href={`/${userId}`}>
      <div
        className={`sidebar__single-message group relative hover:bg-[var(--purple-500)] dark:bg-[var(--grey-850)]`}
      >
        <ChatOpenBtn id={userId} idx={idx} />
        <Image
          src={userImage}
          alt={`${userName}'s profile picture`}
          className="rounded-full flex-shrink-0 w-12 h-12"
          width={40}
          height={40}
        />
        <div>
          <p className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] dark:text-[var(--white)] duration-300">
            {userName}
          </p>
          <p
            className={`single-message__text text-[.9375rem] dark:text-[var(--grey-600)] group-hover:text-[var(--white)] line-clamp-1 duration-200`}
          >
            {text || "No message"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Chat;
