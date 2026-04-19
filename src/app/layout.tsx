import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lunairDisplay = localFont({
  src: "../../assets/fonts/euphemia_ucas/Euphemia-UCAS.ttf.woff",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});

const lunairSans = localFont({
  src: [
    {
      path: "../../assets/fonts/helvetica_neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/helvetica_neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/helvetica_neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

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
      <body className={`${lunairDisplay.variable} ${lunairSans.variable}`}>{children}</body>
    </html>
  );
}
