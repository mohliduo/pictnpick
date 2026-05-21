import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pict n Pick — Photo Experience untuk Coffee Shop",
  description:
    "Photobox & Photoreceipt untuk kafe: tingkatkan customer experience, promosi organik, dan potensi pendapatan tambahan tanpa investasi alat.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pict n Pick — Photo Experience untuk Coffee Shop",
    description:
      "Photobox & Photoreceipt untuk kafe dengan profit sharing, self-service, dan custom branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
