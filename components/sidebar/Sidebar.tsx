import React from "react";
import SidebarNav from "./sidebarNav/SidebarNav";
import SidebarChats from "./sidebarChats/SidebarChats";

const Sidebar = () => {
  return (
    <div>
      <SidebarNav />
      <SidebarChats />
    </div>
  );
};

export default Sidebar;
