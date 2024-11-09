"use client";

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "@/auth";

const SignoutBtn = () => {
  return (
    <Button
      onClick={() => signOut()}
      className="w-full"
      variant={"destructive"}
    >
      Logout
    </Button>
  );
};

export default SignoutBtn;
