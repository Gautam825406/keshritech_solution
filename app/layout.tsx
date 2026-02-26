import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DEFAULT_OG_IMAGE, SITE_URL, localBusinessJsonLd } from "@/lib/seo";

const FloatingWhatsApp = dynamic(() => import("@/components/global/FloatingWhatsApp").then((module) => module.FloatingWhatsApp), {
  ssr: false,
});

const BackToTop = dynamic(() => import("@/components/global/BackToTop").then((module) => module.BackToTop), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Keshri Tech Solution | Tech Support, Video Editing, Cinematic Shoot & Digital Marketing",
    template: "%s | Keshri Tech Solution",
  },
  description:
    "Keshri Tech Solution in Hazaribagh, Jharkhand offers tech support, video editing, cinematic shoots, and digital marketing services across India.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Tech Support in Hazaribagh",
    "Video Editing",
    "Cinematic Shoot Jharkhand",
    "Digital Marketing Jharkhand",
    "SEO services in Jharkhand",
    "Keshri Tech Solution",
  ],
  openGraph: {
    title: "Keshri Tech Solution",
    description:
      "Tech support in Hazaribagh with all-India service delivery for video editing, cinematic shoots, and digital marketing.",
    url: SITE_URL,
    siteName: "Keshri Tech Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Keshri Tech Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshri Tech Solution",
    description:
      "Tech support, cinematic shoots, video editing, and digital marketing services from Hazaribagh to all India.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} />
        <ThemeProvider>
          <ToastProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}