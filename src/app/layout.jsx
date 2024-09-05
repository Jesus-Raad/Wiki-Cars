import { Outfit } from "next/font/google";
import "./globals.css";
import WikiCarsProvider from "@/context/wikiCarsContext";

const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WikiCarsProvider>
        {children}
        </WikiCarsProvider>
      </body>
    </html>
  );
}
