import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchVisitors } from "@/lib/fetchVisitors";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hey There",
  description: "Made with Next Js",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Fetch visitor data
  const visitors = await fetchVisitors();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profile_round.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <p className="visitor-count">🌟 Total {visitors.length} Visitors 🌟</p>
      </body>
    </html>
  );
}
