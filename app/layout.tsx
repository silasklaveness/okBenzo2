import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.okbenzo.no"),
  keywords: [
    "okbenzo",
    "benzoprodukt",
    "frisør",
    "sandefjord",
    "ok benzo",
    "okbenzo no",
  ],
  title: {
    default: "okBenzo | Kjapp og billig hårklipp i Sandefjord",
    template: "%s | okBenzo",
  },
  description: "Kjapp og billig hårklipp i Sandefjord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
