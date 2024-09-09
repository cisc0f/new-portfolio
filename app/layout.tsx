import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francesco Coacci - Portfolio",
  description:
    "Full-stack Engineer based in New York City with experience using Go, Typescript, Python, NextJS, React, Swift, AWS, Firebase and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
