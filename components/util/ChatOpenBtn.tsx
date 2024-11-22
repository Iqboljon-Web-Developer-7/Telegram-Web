"use client";

import { usePathname } from "next/navigation";
import { handleMessage } from "@/lib/utils";

const ChatOpenBtn = ({ id, idx }: { id: string; idx: number }) => {
  const pathname = usePathname()
    ?.split("")
    .filter((u) => u !== "/")
    .join("");

  if (id && typeof document != "undefined") {
    const singleMessages = document.querySelectorAll(
      ".sidebar__single-message",
    );
    const singleMessagesTxts = document.querySelectorAll(
      ".single-message__text",
    );
    if (id == pathname) {
      singleMessages[idx]?.classList.add("dark:bg-[var(--purple-500)]");
      singleMessagesTxts[idx]?.classList.add("dark:text-[var(--white)]");
    } else {
      singleMessages[idx]?.classList.remove("dark:bg-[var(--purple-500)]");
      singleMessagesTxts[idx]?.classList.remove("dark:text-[var(--white)]");
    }
  }

  return (
    <div
      onClick={() => handleMessage()}
      className="absolute inset-0 z-10"
    ></div>
  );
};

export default ChatOpenBtn;
