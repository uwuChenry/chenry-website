import type { Metadata } from "next";
import "../globals.css";
import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Henry Chen",
  description: "Henry's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radio.className} antialiased flex justify-center min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 sm:mx-24`}
      >
        {children}
      </body>
    </html>
  );
}
