import React from "react";
import { SidebarMenu } from "../helpers/Menu";
import Search from "../helpers/Search";

const SidebarNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <SidebarMenu />
      <Search />
    </nav>
  );
};

export default SidebarNav;
