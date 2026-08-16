import type { Metadata } from "next";
import { DM_Sans, Gabarito, Source_Serif_4 } from "next/font/google";
import "./theme.css";
import "./artboard-1280.css";

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const gabarito = Gabarito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "1500 SAT Blueprint",
  description: "Focused SAT prep to reach 1500.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${gabarito.variable} ${sourceSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
