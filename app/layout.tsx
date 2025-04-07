// Next.js and React imports
import { Suspense } from "react";
import type { Metadata } from "next";
import { store  } from "@/redux";

// Local imports
import { roboto } from "./fonts/fonts";
import { SanityLive } from "@/sanity/lib/live";
import Loading from "./Loading";

// Styles
import "./globals.css";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";

export const metadata: Metadata = {
  title: "Telegram Web",
  description:
    "Telegram Web Application. Message with your friends, family and colleagues.",
  icons: {
    icon: "./favicon.png",
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${roboto.variable} bg-[var(--grey-850)] antialiased dark`}
      >
        <ReduxProvider>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <SanityLive />
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout