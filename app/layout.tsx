import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald} from "next/font/google";
import "./globals.css";
import { cn } from "./libs/utils";
import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffects/grain-effect";
import { Cursor } from "@/components/cursor/cursor";

const MainFont = Bricolage_Grotesque({
  subsets : ["latin"]
});

const PixelFont = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-pixel",  
});

const OswaldFont = Oswald({
  subsets : ["latin"],
  variable : "--font-oswald"
});

export const metadata: Metadata = {
  title: "TAHA YASSINE BEN AMEUR",
  description: "Taha official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(MainFont.className,OswaldFont.variable,PixelFont.variable)}
      >
        <GrainEffect />
        
        <Cursor color="#color" />
        {children}
      </body>
    </html>
  );
}
