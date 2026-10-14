import localFont from "next/font/local";

export const faktum = localFont({
  src: [
    { path: "./fonts/Faktum-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Faktum-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Faktum-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Faktum-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-faktum",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const sfProText = localFont({
  src: [
    { path: "./fonts/SFProText-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SFProText-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/SFProText-Semibold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-sf-pro-text",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});
