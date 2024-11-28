"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Updated imports
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const NProgressHandler = async () => {
  const pathname = usePathname();
  const searchParams = await useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    handleStart();

    return () => {
      handleStop();
    };
  }, [pathname, searchParams]);

  return null;
};

export default NProgressHandler;
