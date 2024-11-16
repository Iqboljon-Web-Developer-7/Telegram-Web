import React, { Suspense, lazy } from "react";
import SidebarNav from "./sidebarNav/SidebarNav";
import Loading from "./Loading";

const SideBarChatsComponent = lazy(() => import("./sidebarChats/SidebarChats"));

import ChatsImg from "@/assets/telegram-imgs/chats-bg.jpeg";

const Sidebar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ChatsImg.src})` }}
      className="h-screen relative bg-cover"
    >
      <div className="bg-[var(--transparent-bg)] backdrop-blur-md h-full flex flex-col overflow-y-auto">
        <SidebarNav />
        <Suspense fallback={<Loading />}>
          <SideBarChatsComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
