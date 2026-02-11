import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome | Modern Next.js",
  description: "A modern welcome page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
