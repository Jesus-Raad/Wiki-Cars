import { Outfit } from "next/font/google";
import "./globals.css";
import WikiCarsProvider from "@/context/wikiCarsContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <WikiCarsProvider>
          <Navbar />
          {children}
          <Footer />
        </WikiCarsProvider>
      </body>
    </html>
  );
}
