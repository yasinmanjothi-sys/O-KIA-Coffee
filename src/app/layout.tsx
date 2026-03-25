import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StickyMarquee from "@/components/StickyMarquee";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const okiaType = localFont({
  src: "../../public/fonts/OKIA_Basic_Regular/Okiatype-Regular-Basic.otf",
  variable: "--font-okia",
});

export const metadata: Metadata = {
  title: "O KIA COFFEE",
  description: "O KIA Coffee Cafe — bold artistry and authentic tastes of Vietnam. Located in Peponi Gardens, Nairobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${okiaType.variable} antialiased font-inter font-light tracking-wide bg-[#FDFDFD] text-[#6E0D31] pt-7`}
      >
        <StickyMarquee />
        {children}
      </body>
    </html>
  );
}
