import type {Metadata} from "next";
import {IBM_Plex_Mono as Font} from "next/font/google";
import "./globals.css";

const font = Font({subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "Todo app",
  description: "...",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
