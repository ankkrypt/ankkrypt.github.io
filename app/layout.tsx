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
  metadataBase: new URL("https://ankkrypt.github.io"),
  title: "Ankit Dhotre | Full Stack Developer",
  description: "Curious builder • Consistent learner • Future-ready developer. Building scalable web applications with React, Next.js, Node.js, and modern technologies.",
  keywords: ["Ankit Dhotre", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Ankit Dhotre" }],
  publisher: "Ankit Dhotre",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ankit Dhotre | Full Stack Developer",
    description: "Curious builder • Consistent learner • Future-ready developer",
    type: "website",
    url: "https://ankkrypt.github.io",
    siteName: "Ankit Dhotre",
    images: [
      {
        url: "/OG-SS.png",
        width: 1200,
        height: 630,
        alt: "Ankit Dhotre portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Dhotre | Full Stack Developer",
    description: "Curious builder • Consistent learner • Future-ready developer",
    images: ["/OG-SS.png"],
    creator: "@ankkrypt",
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
