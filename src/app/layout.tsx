import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lunair Demo",
  description: "Frontend demo built from a Figma luxury real-estate prototype.",
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
