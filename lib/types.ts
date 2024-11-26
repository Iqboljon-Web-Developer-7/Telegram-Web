import { Session } from "next-auth";
import { MessageType } from "@/components/sidebar/sidebarChats/SidebarChats";

export interface messagesLayoutPropTypes {
  children: React.ReactNode;
}

export interface sidebarChatsPropTypes {
  messages: MessageType[];
  authInfos: Session;
}

export interface sidebarChatPropTypes {
  otherUser?: { _id: string; image: string; name: string } | any;
  text?: string;
  idx: number;
}
