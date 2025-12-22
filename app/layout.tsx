import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Google_Sans_Flex } from 'next/font/google'

const geistSans = Google_Sans_Flex({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Google_Sans_Flex({
  variable: "--font-google_sans_flex-medium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertex",
  description: "Offical Dept. of ETE Culb - DSCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen'}
      >
        <Navbar className="flex-grow"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
