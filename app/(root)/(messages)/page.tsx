import React, { lazy, Suspense } from "react";
import MainBg from "@/assets/telegram-imgs/main-bg.webp";
import { GET_ALL_USERS } from "@/sanity/lib/queries";
import { auth } from "@/auth";
import { sanityFetch } from "@/sanity/lib/live";
const UsersDataTable = lazy(() => import("@/components/usersTable/UsersTable"));

const page = async () => {
  const session = await auth();
  const { data: allUsers } = await sanityFetch({
    query: GET_ALL_USERS,
    params: { id: session?.id },
  });

  return (
    <section
      style={{ backgroundImage: `url(${MainBg.src})` }}
      className="bg-cover"
    >
      <div className="bg-[var(--transparent-bg)] backdrop-blur-md h-full">
        <div className="container max-w-[40rem] mx-auto flex-center h-full">
          <div className="flex-center p-5 bg-black flex-col rounded-lg">
            <h3 className="text-2xl text-[var(--purple-500)] mb-2">Users</h3>
            <div>
              <Suspense fallback={<div className="loader"></div>}>
                <UsersDataTable allUsers={allUsers} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
