import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teach East Premium Talent",
  description: "Premium Talent Pool Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}