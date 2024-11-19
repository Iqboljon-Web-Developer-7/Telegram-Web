import React, { Suspense, lazy } from "react";
import ChatsImg from "@/assets/telegram-imgs/chats-bg.jpeg";
import Loading from "./Loading";
import { SidebarMenu } from "./helpers/Menu";
import Search from "./helpers/Search";
const SideBarChatsComponent = lazy(() => import("./sidebarChats/SidebarChats"));

const Sidebar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ChatsImg.src})` }}
      className="h-screen relative bg-cover"
    >
      <div className="bg-[var(--transparent-bg)] backdrop-blur-md h-full flex flex-col overflow-y-auto">
        <nav className="flex items-center justify-between p-2 sticky inset-[0_0_auto_0] z-10">
          <SidebarMenu />
          <Search />
        </nav>
        <Suspense fallback={<Loading />}>
          <SideBarChatsComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
