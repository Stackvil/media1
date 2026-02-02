import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import SpecialEffectsOverlay from '@/components/ui/SpecialEffectsOverlay';
import NavigationButtons from '@/components/ui/NavigationButtons';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "The Justice Ledger | Trusted Legal News",
  description: "Breaking legal news, case updates, and public awareness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, merriweather.variable, "font-sans antialiased bg-background text-foreground flex flex-col min-h-screen")}>
        <SpecialEffectsOverlay />
        <NavigationButtons />
        <Header />
        <main className="flex-grow w-full px-4 md:px-8 lg:px-12 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
