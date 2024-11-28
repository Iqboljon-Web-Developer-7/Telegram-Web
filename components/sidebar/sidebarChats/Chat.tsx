import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import ChatStatus from "@/components/util/ChatStatus";
import { sidebarChatPropTypes } from "@/lib/types";

const Chat: FC<sidebarChatPropTypes> = ({ otherUser, text, idx }) => {
  const { _id, image, name } = otherUser;

  return (
    <Link key={_id} href={`/${_id}`}>
      <div
        className={`sidebar__single-message group relative hover:bg-[var(--purple-500)] dark:bg-[var(--grey-850)]`}
      >
        <ChatStatus id={_id} idx={idx} />
        <Image
          src={image || "defaultImg"}
          alt={`${name}'s profile picture`}
          className="rounded-full flex-shrink-0 w-12 h-12"
          width={40}
          height={40}
        />
        <div>
          <p className="w-fit text-base line-clamp-1 font-bold text-[var(--white)] dark:text-[var(--white)] duration-300">
            {name}
          </p>
          <p
            className={`single-message__text w-full text-[.9375rem] dark:text-[var(--grey-600)] group-hover:text-[var(--white)] line-clamp-1 duration-200`}
          >
            {text || "No message"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Chat;
