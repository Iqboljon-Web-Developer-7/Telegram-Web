import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import Loading from "./Loading";
import { SanityLive } from "@/sanity/lib/live";
import NProgressHandler from "./NProgressHandler";

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Telegram Web",
  description:
    "Telegram Web Application. Message with your friends, family and colleagues.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
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
            <Analytics />
          </Suspense>
        </ReduxProvider>
        <NProgressHandler />
        <SanityLive />
      </body>
    </html>
  );
}
