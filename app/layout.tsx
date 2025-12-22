import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
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
        className={`${googleSansFlex.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Navbar className="flex-grow"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
