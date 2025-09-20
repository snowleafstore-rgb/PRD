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
  title: "Snow Leaf Store - Pure Organic Wellness for Your Home",
  description: "Discover pure organic wellness products for your family. Starting with our signature organic oatmeal soap, expanding to bamboo towels and organic bedsheets. 100% organic, zero synthetic chemicals, family-tested.",
  keywords: "organic soap, organic wellness, organic products, natural soap, organic oatmeal soap, bamboo towels, organic bedsheets, chemical-free, family wellness, organic home products",
  authors: [{ name: "Snow Leaf Store" }],
  creator: "Snow Leaf Store",
  publisher: "Snow Leaf Store",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snowleafstore.com',
    title: 'Snow Leaf Store - Pure Organic Wellness for Your Home',
    description: 'Discover pure organic wellness products for your family. Starting with our signature organic oatmeal soap, expanding to bamboo towels and organic bedsheets.',
    siteName: 'Snow Leaf Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow Leaf Store - Pure Organic Wellness for Your Home',
    description: 'Discover pure organic wellness products for your family. Starting with our signature organic oatmeal soap.',
    creator: '@snowleafstore',
  },
  alternates: {
    canonical: 'https://snowleafstore.com',
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
