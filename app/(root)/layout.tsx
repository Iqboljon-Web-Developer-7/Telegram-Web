import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default layout;
