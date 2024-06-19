// *     **************************************************************     *
// *     *                                                            *     *
// *     *                      DEVELOPER: UMAIR SAAD                 *     *
// *     *                      COPYRIGHT 2024                        *     *
// *     *                      DATE: 10 JUNE 2024                     *     *
// *     *                                                            *     *
// *     **************************************************************     *

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Complete Cast",
  description: "Creates podcasts utilizing artificial intelligence",
  icons:{
    icon: '/public/icons/logo2.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConvexClerkProvider>
      {children}
      </ConvexClerkProvider>
      </body>
    </html>
  );
}
