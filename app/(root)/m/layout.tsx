import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";

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
