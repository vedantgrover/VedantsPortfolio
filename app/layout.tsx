import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Full Stack Developer from Seattle Washington - Vedant Grover",
    description: "I aspire to change the future one pixel at a time. Whether that is through a change in the UI/UX field or a change in the backend, I am efficient, effective, and ready to work.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const navBarLinks = [
        {title: "Home", link: "/"},
        {title: "About", link: "/about"},
        {title: "Stack", link: "/stack"},
        {title: "Projects", link: "/projects"},
        {title: "Resume", link: "/resume"},
        {title: "Contact", link: "/contact"}
    ]

    return (
        <html lang="en">
        <body className={inter.className}>
        <main>
            <Navbar links={navBarLinks}/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
