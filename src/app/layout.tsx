import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from '@/modules/footer/footer'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} p-4 lg:px-[8rem]`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
  
  
}
