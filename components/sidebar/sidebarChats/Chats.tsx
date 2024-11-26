import React, { FC } from "react";
import Link from "next/link";
import Chat from "./Chat";
import { Button } from "@/components/ui/button";
import { sidebarChatsPropTypes } from "@/lib/types";

const Chats: FC<sidebarChatsPropTypes> = ({ messages, authInfos }) => {
  const uniqueChats = new Set<string>();
  const chats = messages.filter((message) => {
    const otherUserId =
      message.author?._id === authInfos.id
        ? // @ts-ignore
          message.receiver?._id
        : message.author?._id;

    if (uniqueChats.has(otherUserId)) return false;
    uniqueChats.add(otherUserId);
    return true;
  });

  return (
    <div className="flex flex-col gap-2">
      {chats?.map((item, idx) => {
        const otherUser =
          item.author?._id === authInfos.id ? item.receiver : item.author;

        return (
          <Chat
            // @ts-ignore
            key={otherUser._id}
            otherUser={otherUser}
            idx={idx}
            text={item?.text || "No message"}
          />
        );
      })}
      {chats.length === 0 && (
        <div className="flex-center flex-col gap-3 mt-4">
          <p className="text-center text-muted-foreground">No User</p>
          <Button>
            <Link href="/" className="w-full">
              Users list
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Chats;
