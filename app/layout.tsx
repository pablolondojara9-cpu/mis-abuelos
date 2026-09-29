import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans, Lora, Montserrat } from 'next/font/google'; //New fonts
import "./globals.css";
//Components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body', // Variable CSS
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-title', // Variable CSS
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-menu', // Variable CSS
});

export const metadata: Metadata = {
  title: "Mis Abuelos | Corporación Apoyo Social",
  description:
    "Corporación de apoyo social dedicada a acompañar a adultos mayores con dignidad, fe y comunidad.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${lora.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
