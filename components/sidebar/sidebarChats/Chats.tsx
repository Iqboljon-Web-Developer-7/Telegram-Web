import React from "react";
import Link from "next/link";
import { session } from "next-auth";
import { MessageType } from "./SidebarChats";
import { Button } from "@/components/ui/button";
import Chat from "./Chat";

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
        ? // @ts-ignore
          message.receiver?._id || "defaultReceiverId"
        : message.author?._id || "defaultAuthorId";

    if (uniqueChats.has(otherUserId)) return false;
    uniqueChats.add(otherUserId);
    return true;
  });

  return (
    <div className="flex flex-col gap-2">
      {chats.map((item, idx) => {
        const otherUserId =
          item.author?._id === authInfos.id
            ? item.receiver || {
                _id: "defaultReceiverId",
                image: "/default.png",
                name: "Unknown",
              }
            : item.author || {
                _id: "defaultAuthorId",
                image: "/default.png",
                name: "Unknown",
              };

        return (
          <Chat
            // @ts-ignore
            key={otherUserId._id}
            otherUserId={otherUserId}
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
