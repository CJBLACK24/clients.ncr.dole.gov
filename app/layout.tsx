import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DOLE-NCR e-Filing Service | Department of Labor and Employment",
  description:
    "Online compliance portal for labor and employment services in the National Capital Region. File requests, register establishments, and submit reports digitally.",
  keywords: [
    "DOLE",
    "NCR",
    "e-Filing",
    "labor",
    "employment",
    "Philippines",
    "government",
  ],
};

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(poppins.variable)}>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
