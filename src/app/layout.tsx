import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/index";
import React from "react";
import Footer from "@/components/Footer/index";

export const metadata: Metadata = {
  title: "Lighthouse",
  description: "~@saur0w(Github) @sauroww(X)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
