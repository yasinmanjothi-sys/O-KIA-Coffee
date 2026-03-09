import type { Metadata } from "next";
import { Inter, Poiret_One, Sacramento } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret",
  subsets: ["latin"],
  weight: "400",
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
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
      <body
        className={`${inter.variable} ${poiretOne.variable} ${sacramento.variable} antialiased font-inter font-light tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
