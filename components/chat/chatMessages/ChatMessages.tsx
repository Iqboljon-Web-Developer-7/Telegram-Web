import { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/lib/client";

const ChatMessages = ({ currentUserId, selectedUserId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initial fetch
    sanityClient.fetch(GET_CHAT_MESSAGES_QUERY, { currentUserId, selectedUserId })
      .then(setMessages);

    // Real-time subscription
    const subscription = sanityClient
      .listen(GET_CHAT_MESSAGES_QUERY, { currentUserId, selectedUserId })
      .subscribe((update) => {
        setMessages((prev) => /* update logic here */);
      });

    return () => subscription.unsubscribe();
  }, [currentUserId, selectedUserId]);

  return (
    <div className="chatMessages">
      {messages.map((item) => (
        <ChatMessage key={item._id} currentUserId={currentUserId} item={item} />
      ))}
    </div>
  );
};
