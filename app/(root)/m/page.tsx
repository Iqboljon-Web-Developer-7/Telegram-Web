import React from "react";
import { UsersDataTable } from "@/components/usersTable/UsersTable";
import { client } from "@/sanity/lib/client";
import { GET_ALL_USERS } from "@/sanity/lib/queries";

import MainBg from "@/assets/telegram-imgs/main-bg.jpg";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  // @ts-ignore
  const allUsers = await client.fetch(GET_ALL_USERS, { id: session.id });

  return (
    <section
      style={{ backgroundImage: `url(${MainBg.src})` }}
      className="bg-cover"
    >
      <div className="bg-[var(--transparent-bg)] backdrop-blur-md h-full">
        <div className="container max-w-[40rem] mx-auto flex-center flex-col h-full">
          <h3 className="text-3xl text-[#c7f9cc]">Users</h3>
          <div>
            <UsersDataTable allUsers={allUsers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
