import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProvider from "@/services/provider/react-query-provider";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stock Prediction",
  description: "Stock Prediction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased bg-green-500 h-screen')}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
