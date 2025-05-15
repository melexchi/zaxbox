import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Container from "./myComponents/Container";
import Navbar from "./myComponents/Navbar";
import Footer from "./myComponents/Footer";
import { cookies } from "next/headers";
import Router from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-manrope", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaxbox - Modern Fintech Solutions",
  description: "Trade Giftcards, Trade Crypto, Pay bill, Fund your Virtual cards, ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = cookies();
  const token =  (await cookieStore).get("auth-token")?.value;
  const isLoggedIn = !!token;
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Container>
          {!isLoggedIn && <Navbar />}
        {children}
        <Footer />
        </Container>
        
      </body>
    </html>
  );
}
