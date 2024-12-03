"use client";

import React, { useEffect, useState } from "react";

const ShowAllUsers = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const AllUsers = document.querySelector(".usersDataTable");
    isActive
      ? AllUsers?.classList.add("active")
      : AllUsers?.classList.remove("active");
  }, [isActive]);

  return <button onClick={() => setIsActive((p) => !p)}>{children}</button>;
};

export default ShowAllUsers;
