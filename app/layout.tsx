import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { viewport } from "./viewport";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { viewport };

export const metadata: Metadata = {
  metadataBase: new URL("https://topshopping.vercel.app"),
  title: "TopShopping - Top 100 Sản Phẩm Shopee Bán Chạy 2025 | Review & Giá Tốt",
  description: "Tìm & mua những sản phẩm Shopee bán chạy nhất 2025. Review chuyên sâu, hàng chính hãng, giá cạnh tranh, giao nhanh. So sánh giá online dễ dàng với 98+ sản phẩm topShopping.",
  keywords: ["shopee bán chạy", "mua sản phẩm shopee", "review sản phẩm shopee", "giá tốt nhất shopee", "hàng chính hãng", "so sánh giá online 2025", "sản phẩm trending shopee"],
  authors: [{ name: "TopShopping Team" }],
  creator: "TopShopping",
  publisher: "TopShopping",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://topshopping.vercel.app",
    siteName: "TopShopping",
    title: "TopShopping - Review Sản Phẩm Shopee Bán Chạy Nhất 2025",
    description: "Khám phá 98+ sản phẩm bán chạy từ Shopee. Review chi tiết, giá tốt, hàng chính hãng - tất cả tại TopShopping",
    images: [
      {
        url: "https://topshopping.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "TopShopping - Trang Review Sản Phẩm Shopee Hàng Đầu Việt Nam",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopShopping - Top Sản Phẩm Shopee 2025",
    description: "98+ sản phẩm bán chạy, review chi tiết, giá tốt nhất - Mua hàng thông minh qua TopShopping",
    creator: "@TopShopping",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <link rel="icon" href="/favicon.ico" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
