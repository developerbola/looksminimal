import type { Metadata } from "next";
import "./styles/index.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { LinksProvider } from "./context/LinksProvider";
export const metadata: Metadata = {
  title: "LooksMinimal",
  description: "Minimalistic builded apps.",
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
      <body className={`${jetbrains.variable} ${montserrat.className}`}>
        <LinksProvider>
          <Navbar />
          <div className="px-16 pt-20">{children}</div>
        </LinksProvider>
      </body>
    </html>
  );
}
