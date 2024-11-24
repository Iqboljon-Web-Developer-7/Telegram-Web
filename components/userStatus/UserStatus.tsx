"use client";

import React, { useEffect } from "react";

const UserStatus = ({ userId }: { userId: string }) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      console.log("User is attempting to leave the page.");
      if (userId) updateStatus("Offline");
      return undefined;
    };

    const updateStatus = async (status: string) => {
      if (userId) {
        try {
          const response = await fetch("/api/userStatus", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userId }),
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

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userId]);

  return <div></div>;
};

export default UserStatus;
