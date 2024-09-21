import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import Providers from "@/redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CeMRD ",
  description: "The Center for Multidisciplinary Research and Development Driving Innovation and Knowledge Advancement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <Toaster position='top-center'></Toaster>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
