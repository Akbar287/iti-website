import type { Metadata } from "next";
import { Spectral, Sono } from "next/font/google";
import "./globals.css";

const spectralSans = Spectral({
  variable: "--font-spectral",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
});

const SonoMono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Institut Teknologi Indonesia - The Technology-based Entrepreneur University",
  description:
    "Institut Teknologi Indonesia - Kuliah Online dan Offline, kuliah kelas karyawan (RPL) dan reguler, Kuliah Teknik- Biaya dicicil sampai lulus",
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-touch-icon.png",
  },
  keywords: [
    "Institut Teknologi Indonesia",
    "Kuliah Online",
    "Kuliah Offline",
    "Kuliah Kelas Karyawan",
    "Kuliah Reguler",
    "Kuliah Teknik",
    "Biaya Dicicil",
    "Kuliah IT",
    "Kuliah Teknik Informatika",
    "Kuliah Teknik Komputer",
  ],
  openGraph: {
    title:
      "Institut Teknologi Indonesia - The Technology-based Entrepreneur University",
    description:
      "Institut Teknologi Indonesia - Kuliah Online dan Offline, kuliah kelas karyawan (RPL) dan reguler, Kuliah Teknik- Biaya dicicil sampai lulus",
    url: "https://www.iti.ac.id",
    siteName: "Institut Teknologi Indonesia",
    images: [
      {
        url: "/icon/Logo-ITI-oke-1.png",
        width: 1200,
        height: 630,
        secureUrl: "/icon/Logo-ITI-oke-1.png",
        type: "image/png",
        alt: "Institut Teknologi Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Institut Teknologi Indonesia - The Technology-based Entrepreneur University",
    description:
      "Institut Teknologi Indonesia - Kuliah Online dan Offline, kuliah kelas karyawan (RPL) dan reguler, Kuliah Teknik- Biaya dicicil sampai lulus",
    images: [
      {
        url: "/icon/Logo-ITI-oke-1.png",
        width: 1200,
        height: 630,
        alt: "Institut Teknologi Indonesia",
      },
    ],
    site: "@itindonesia",
    creator: "@itindonesia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    notranslate: false,
    nosnippet: false,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
  appleWebApp: {
    capable: true,
    title:
      "Institut Teknologi Indonesia - The Technology-based Entrepreneur University",
    statusBarStyle: "default",
    startupImage: "/icon/apple-touch-icon.png",
  },
  // manifest: "/manifest.json",
  themeColor: "oklch(0.685 0.231 38.2)",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google:
      "google-site-verification=FUCYTTrKjmtMwajX-4vs5QxlBl0GWI_i2xuoaw4pbVM",
  },
  alternates: {
    canonical: "https://www.iti.ac.id",
    languages: {
      en: "/en",
      id: "/",
    },
  },
  facebook: {
    appId: "471953908653450",
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
        className={`${spectralSans.variable} ${SonoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
