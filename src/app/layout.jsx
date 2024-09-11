import { Outfit } from "next/font/google";
import "./globals.css";
import WikiCarsProvider from "@/context/wikiCarsContext";
import Navbar from "@/components/Navbar";

const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <WikiCarsProvider>
          <Navbar/>
        {children}
        </WikiCarsProvider>
      </body>
    </html>
  );
}
