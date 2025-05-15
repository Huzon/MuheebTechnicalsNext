import type { Metadata } from "next";
import "./globals.css";
import {  poppins } from "@/app/ui/font";



export const metadata: Metadata = {
  title: "Muheeb Technicals",
  description: "For all your technical needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >

        {/* <div className="fixed top-0 h-[50px] bg-red-500 w-screen">
          
        </div> */}

        {children}
      </body>
    </html>
  );
}
