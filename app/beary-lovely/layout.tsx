import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love is gross . com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navBarLinks = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    // {title: "Stack", id: "stack"},
    // {title: "Projects", id: "projects"},
    {title: "Contact", id: "contact"}
  ];

  return (
    <html lang="en" className="!scroll-smooth dark:bg-zinc-800 no-scrollbar">
      <body className={inter.className}>
        <main>
          <Navbar links={navBarLinks} />
          {children}
        </main>
      </body>
    </html>
  );
}
