import React from "react";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_CHAT_MESSAGES_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";

const ChatMessages = async ({
  currentUserId,
  selectedUserId,
}: {
  currentUserId: string;
  selectedUserId: string;
}) => {
  const session = await auth();

  // For filtering messages
  const { data: chatMessages } = await sanityFetch({
    query: GET_CHAT_MESSAGES_QUERY,
    params: {
      currentUserId,
      selectedUserId,
    },
  });

  return (
    <div className="max-w-[44rem] w-full mx-auto px-3 overflow-y-auto flex flex-grow flex-col-reverse gap-1">
      {chatMessages?.map((item: MessageType) => {
        return (
          <div
            key={item?._id}
            className={`w-fit max-w-[85%] py-2 px-3 rounded-2xl  ${currentUserId == item?.author?._id ? "bg-[var(--purple-550)] self-end rounded-br-none" : "bg-[var(--grey-850)] rounded-bl-none"}`}
          >
            {item?.text}
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
