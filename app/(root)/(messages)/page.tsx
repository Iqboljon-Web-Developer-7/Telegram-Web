import React, { lazy, Suspense } from "react";
import MainBg from "@/assets/telegram-imgs/main-bg.webp";
import { GET_ALL_USERS } from "@/sanity/lib/queries";
import { auth } from "@/auth";
import { sanityFetch } from "@/sanity/lib/live";
import { X } from "lucide-react";
import ShowAllUsers from "@/components/showAllUsers/ShowAllUsers";
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
      className="usersDataTable bg-cover fixed inset-[0_-100%_0_auto] sm:static duration-200"
    >
      <ShowAllUsers>
        <X className="absolute top-4 right-4 z-10 sm:hidden" />
      </ShowAllUsers>
      <div className="bg-[var(--transparent-bg)] backdrop-blur-md h-full">
        <div className="container max-w-[40rem] mx-auto flex-center h-full">
          <div className="min-w-52 flex-center p-5 bg-[var(--black-600)] flex-col rounded-lg">
            <h3 className="text-2xl text-[var(--purple-500)] mb-2">Users</h3>
            <div className="w-full">
              <Suspense fallback={<div className="loader"></div>}>
                {allUsers.length != 0 ? (
                  <UsersDataTable allUsers={allUsers} />
                ) : (
                  <p className="text-center text-muted-foreground">None</p>
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
