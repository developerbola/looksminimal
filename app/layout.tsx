import type { Metadata } from "next";
import "./styles/index.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Hashnote",
  description: "Minimalist note taking app.",
  icons: "/logo.svg",
};

// Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
      </head>
      <body className={`${jetbrains.variable} ${montserrat.className}`}>
        <Navbar />
        <div className="px-16 pt-20">{children}</div>
      </body>
    </html>
  );
}
