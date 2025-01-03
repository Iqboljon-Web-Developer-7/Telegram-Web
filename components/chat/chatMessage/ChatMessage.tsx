import { ShadcnContextMenu } from "@/components/contextMenu/ContextMenu";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import React from "react";

const ChatMessage = ({
  currentUserId,
  item,
}: {
  currentUserId: string;
  item: MessageType;
}) => {
  let createdAt = item._createdAt;
  const time = createdAt.split("T")[1].split(":");
  const hourMinute = `${+time[0] + 5}:${time[1]}`;

  return (
    <div
      className={`relative w-fit max-w-[85%] py-1 pl-2 pr-2 rounded-xl flex items-end gap-1  ${currentUserId == item?.author?._id ? "bg-[var(--purple-550)] self-end rounded-br-none rounded-l-2xl" : "bg-[var(--grey-850)] rounded-r-xl rounded-bl-none"}`}
    >
      <ShadcnContextMenu id={item._id} messageId={item?._id}>
        <span className="break-all">
          {item?.text}
          <span className="text-xs ml-1 text-[var(--grey-600)] text-start float-right leading-[2] relative -bottom-1">
            {hourMinute}
          </span>
        </span>
      </ShadcnContextMenu>
    </div>
  );
};

export default ChatMessage;
