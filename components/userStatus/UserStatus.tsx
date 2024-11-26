"use client";

import { toDoubleNum } from "@/lib/utils";
import React, { useEffect } from "react";

const UserStatus = ({ userId }: { userId: string }) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      if (userId)
        updateStatus(`Last seen ${toDoubleNum(hours)}:${toDoubleNum(minutes)}`);
      event.preventDefault();
    };

    const updateStatus = async (status: string) => {
      if (userId) {
        try {
          const response = await fetch("/api/userStatus", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userId, status }),
          });
          if (response.ok) {
            console.log("Status updated successfully");
          } else {
            console.error("Failed to update status");
          }
        } catch (error) {
          console.error("Error updating status:", error);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleBeforeUnload);
    document.addEventListener("visibilitychange", (e) => {
      if (document.visibilityState == "hidden") {
        handleBeforeUnload(e);
      }
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userId]);

  return <></>;
};

export default UserStatus;
