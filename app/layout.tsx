import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Dhotre | Full Stack Developer",
  description: "Curious builder • Consistent learner • Future-ready developer. Building scalable web applications with React, Next.js, Node.js, and modern technologies.",
  keywords: ["Ankit Dhotre", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Ankit Dhotre" }],
  openGraph: {
    title: "Ankit Dhotre | Full Stack Developer",
    description: "Curious builder • Consistent learner • Future-ready developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
