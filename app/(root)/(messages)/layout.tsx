import React, { Suspense } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session);

  // If user not found
  if (!session?.isExist) {
    redirect("/signIn");
  }

  return (
    <div className="main-container overflow-x-hidden">
      <Sidebar />
      <Suspense
        fallback={
          <div className="w-full flex-center">
            <span className="loader"></span>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default layout;
