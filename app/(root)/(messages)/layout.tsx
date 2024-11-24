import React, { Suspense } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import { unstable_after as after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";
import UserStatus from "@/components/userStatus/UserStatus";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  // If user not found
  if (!session?.isExist) {
    redirect("/signIn");
  }
  after(
    async () =>
      await writeClient.patch(session.id).set({ status: "Online" }).commit()
  );

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
      <UserStatus userId={session.id} />
    </div>
  );
};

export default layout;
