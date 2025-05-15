import type { Metadata } from "next";
import "./globals.css";
import {  poppins } from "@/app/ui/font";
import MobileMenu from "@/app/ui/mobileMenu"; // Adjust path as needed




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
        className={`${poppins.className} antialiased`} >
            <nav className="p-4 fixed top-0 z-20 w-full flex justify-between items-center shadow-sm">
          {/* LOGO */}
          <div className="text-2xl font-bold antialiased">
            MUHEEB LOGO
          </div>

          {/* Navigation Button */}
            <MobileMenu />
          
       </nav>

        {children}
      </body>
    </html>
  );
}
