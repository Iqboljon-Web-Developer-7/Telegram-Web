import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default layout;
