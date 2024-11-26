import React, { Suspense, lazy } from "react";
const SideBarChatsComponent = lazy(() => import("./sidebarChats/SidebarChats"));

import Loading from "./Loading";
import { SidebarMenu } from "./helpers/Menu";
import SearchForm from "./helpers/Search";

import ChatsBg from "@/assets/telegram-imgs/chats-bg.jpeg";

const Sidebar = () => (
  <div
    style={{ backgroundImage: `url(${ChatsBg.src})` }}
    className="h-screen relative bg-cover border-r border-borderPurple"
  >
    <div className="backdrop-blur-sm h-full flex flex-col overflow-y-auto">
      <nav className="flex items-center justify-between p-2 sticky inset-[0_0_auto_0] z-10">
        <SidebarMenu />
        <SearchForm />
      </nav>
      <Suspense fallback={<Loading />}>
        <SideBarChatsComponent />
      </Suspense>
    </div>
  </div>
);

export default Sidebar;
