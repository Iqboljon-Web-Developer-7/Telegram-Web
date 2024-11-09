import React from "react";
import { auth } from "@/auth";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default layout;
