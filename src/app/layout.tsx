import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Enterprise | Digital CX & Technology Solutions for Global Leaders",
    description:
        "We are an elite provider of customer experience and technology solutions for the world's leading enterprises. Transform your business with our enterprise-grade services.",
    keywords: [
        "enterprise solutions",
        "customer experience",
        "digital transformation",
        "technology services",
        "AI analytics",
        "B2B services",
    ],
    authors: [{ name: "Enterprise" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://enterprise.com",
        siteName: "Enterprise",
        title: "Enterprise | Digital CX & Technology Solutions",
        description:
            "Transform your business with enterprise-grade customer experience and technology solutions.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Enterprise - Digital CX Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise | Digital CX & Technology Solutions",
        description:
            "Transform your business with enterprise-grade customer experience and technology solutions.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">
                <Header />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
