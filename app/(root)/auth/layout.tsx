import React from "react";
import Image from "next/image";

import telegramIcon from "@/assets/auth/telegram-icon.png";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) redirect("/m");

  return (
    <div className="auth-container">
      <div className="auth-container__main">
        <div className="auth-info flex-center flex-col">
          <Image
            src={telegramIcon.src}
            alt="telegram icon"
            width={160}
            height={160}
            priority
          />
          <div className="auth-info__content mt-8 text-center grid gap-2">
            <h4 className="text-[2rem] font-medium">Sign in to Telegram</h4>
            <p className="w-[36ch] text-[var(--grey-600)]">
              Please fill this form in order to sign in. We hope that you will
              enjoy using Telegram.
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
