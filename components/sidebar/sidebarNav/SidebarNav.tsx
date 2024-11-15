import React from "react";
import { SidebarMenu } from "../helpers/Menu";
import Search from "../helpers/Search";

const SidebarNav = () => {
  return (
    <nav className="flex items-center justify-between p-2 sticky inset-[0_0_auto_0] z-10">
      <SidebarMenu />
      <Search />
    </nav>
  );
};

export default SidebarNav;
