import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikram Vishwakarma",
  description: "Made with Next Js",
};

interface VisitorType {
  _id: string;
  ipAddress: string;
  visitDate: string;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Fetch visitor data
  // const visitors: VisitorType[] = await fetchVisitors();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profile_round.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body /*className={inter.className}*/>
        {children}
      </body>
    </html>
  );
}
