import { client } from "@/sanity/lib/client";
import { GET_MESSAGES_QUERY } from "@/sanity/lib/queries";
import React from "react";

const SidebarChats = async () => {
  const messages = await client.fetch(GET_MESSAGES_QUERY);

  console.log(messages);
  if (messages) {
    messages?.map((item: {}) => console.log(item));
  }

  return (
    <div>
      {messages?.map((item) => (
        <div key={item.author._id}>
          <p className="text-2xl">{item.author.name}</p>
          <p className="text-base">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarChats;
