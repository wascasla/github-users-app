import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyleRoot from "./StyleRoot";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleRoot>
          <ReactQueryProvider>
          <FavoritesProvider>
            {children}

          </FavoritesProvider>
          </ReactQueryProvider>
        </StyleRoot>
      </body>
    </html>
  );
}

