import React from "react";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { TooltipUtil } from "@/components/util/Tooltip";

const page = async () => {
  const signInOptions = [
    {
      id: 1,
      provider: "google",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8674E1" }}
        >
          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      provider: "github",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="204"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8674E1" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-6 w-full">
      {signInOptions?.map((item, index) => (
        <form
          key={index}
          action={async () => {
            "use server";

            await signIn(item.provider);
          }}
        >
          <TooltipUtil title={`Sign in with ${item.provider}`}>
            <Button
              aria-label={`${item.provider} signin button`}
              className="auth-btn group"
              type="submit"
            >
              <span className="auth-icon">{item.icon}</span>
              {item.provider.toUpperCase()}
            </Button>
          </TooltipUtil>
        </form>
      ))}
    </div>
  );
};

export default page;
