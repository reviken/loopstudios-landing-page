import type { Metadata } from "next";
import { Josefin_Sans, Alata } from "next/font/google";
import "./globals.css";
import favicon from "@/images/favicon-32x32.png";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loopstudios Landing Page",
  description: "Frontend Mentor exercise",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${alata.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
