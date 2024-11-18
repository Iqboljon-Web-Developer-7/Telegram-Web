import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/auth/signIn");
  }

  return (
    <div className="main-container overflow-x-hidden">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
