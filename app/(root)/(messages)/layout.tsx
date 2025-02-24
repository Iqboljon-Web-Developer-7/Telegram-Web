import React, { FC, Suspense } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import { unstable_after as after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";
import UserStatus from "@/components/userStatus/UserStatus";
import { messagesLayoutPropTypes } from "@/lib/types";

const layout: FC<messagesLayoutPropTypes> = async ({ children }) => {
  const session = await auth();

  // If user not found
  // i commented that to check my website on google pageInsights
  // if (!session?.isExist) redirect("/signIn");

  // Whenever user opens the website User's status is set to Online
  after(
    async () =>
      await writeClient.patch(session.id).set({ status: "Online" }).commit()
  );

  return (
    <div className="main-container overflow-x-hidden">
      <UserStatus userId={session.id} />
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
