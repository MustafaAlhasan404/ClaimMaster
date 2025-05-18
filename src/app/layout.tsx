import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClaimMasters Dental Billing - Your Trusted Dental Billing Company",
  description: "ClaimMasters Dental Billing provides comprehensive dental billing services including insurance verification, billing and AR, and dental virtual assistant services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Asset 1 2.webp" type="image/webp" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
