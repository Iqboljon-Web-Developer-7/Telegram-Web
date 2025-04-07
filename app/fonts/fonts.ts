// fonts.ts
import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    { path: "../fonts/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Roboto-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "../fonts/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-roboto",
});