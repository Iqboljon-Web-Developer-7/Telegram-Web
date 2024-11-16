import { File, Send, Tag } from "lucide-react";
import React from "react";

const ChatInputBar = () => {
  return (
    <div className="mt-5 flex items-center justify-center gap-3">
      <form className="w-full rounded-full py-2 px-4 flex items-center justify-center bg-[var(--grey-850)]">
        <input
          type="text"
          name="message"
          className={`w-full placeholder:text-[var(--grey-800)] bg-transparent text-base outline-none border-none`}
          placeholder="Write your comment..."
        />
        <button>
          <File className="text-[var(--grey-600)]" />
        </button>
      </form>
      <button className="p-2 bg-[var(--purple-500)] rounded-full hover:bg-[var(--purple-550)] duration-300">
        <Send className="translate-y-[.1rem] -translate-x-[.1rem]" />
      </button>
    </div>
  );
};

export default ChatInputBar;
