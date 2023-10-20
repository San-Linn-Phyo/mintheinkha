import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mintheinkha - Lat Htauk Bay Din",
  description: "A baydin website.",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${inter.className} max-w-5xl mx-auto px-6`}>
        {children}
      </body>
    </html>
  );
}
