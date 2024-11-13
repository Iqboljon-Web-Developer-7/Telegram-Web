"use client";

import React, { useEffect, useState } from "react";
import { MessageType } from "./SidebarChats";

const Chats = ({
  messages,
  authInfos,
}: {
  messages: MessageType[];
  authInfos: any;
}) => {
  const [filteredMessages, setFilteredMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    let seen: string[] = [];

    console.log(authInfos);

    let filteredMessages = messages?.filter((item: MessageType) => {
      if (!seen.includes(item.author!._id)) {
        seen.push(item.author!._id);
        return item;
      }
    });

    setFilteredMessages(filteredMessages);
  }, [messages]);

  return (
    <div>
      {filteredMessages?.map((item: MessageType) => (
        <div className="group duration-200 w-full p-2 hover:brightness-125 bg-[var(--white)] hover:bg-[var(--grey-600)] rounded-xl shadow dark:bg-[var(--grey-850)] cursor-pointer">
          <p
            className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] group-hover:text-[var(--purple-500)] dark:text-[var(--white)]"
            dangerouslySetInnerHTML={{ __html: item.author!.name! }}
          />
          <p
            className="text-[.9375rem] text-[var(--grey-600) dark:text-gray-400 line-clamp-1"
            dangerouslySetInnerHTML={{ __html: item.text! }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
