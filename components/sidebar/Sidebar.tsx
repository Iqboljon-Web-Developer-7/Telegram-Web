import React, { Suspense } from "react";
import SidebarNav from "./sidebarNav/SidebarNav";
import SidebarChats from "./sidebarChats/SidebarChats";
import Loading from "./Loading";

import ChatsImg from "@/assets/telegram-imgs/chats-bg.jpeg";

const Sidebar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ChatsImg.src})` }}
      className="min-h-screen overflow-x-auto relative bg-cover"
    >
      <div className="bg-[#22222299] backdrop-blur-md h-full">
        <SidebarNav />
        <Suspense fallback={<Loading />}>
          <SidebarChats />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
