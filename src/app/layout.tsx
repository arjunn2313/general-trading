import type { Metadata } from "next";
import { Krub } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import WhatsAppButton from "./components/button/WhatsAppButton";
import Footer from "./components/layout/Footer";
 

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${krub.className} antialiased`}>
        <Navbar/>
        {children}
        <WhatsAppButton />  
        <Footer/>
      </body>
    </html>
  );
}
