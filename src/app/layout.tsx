import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    metadataBase: new URL('https://yourdomain.com'),
    title: {
        default: "Component Documentation",
        template: "%s | Component Documentation"
    },
    description: "A modern component documentation site built with Next.js, TypeScript, and Tailwind CSS. Browse beautiful, accessible UI components with live previews and copy-paste code.",
    keywords: ["components", "documentation", "UI", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    authors: [{ name: "Your Name" }],
    creator: "Your Name",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yourdomain.com",
        title: "Component Documentation",
        description: "A modern component documentation site with live previews and copy-paste code.",
        siteName: "Component Documentation",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Component Documentation"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Component Documentation",
        description: "A modern component documentation site with live previews and copy-paste code.",
        images: ["/og-image.png"],
        creator: "@yourusername"
    },
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
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="flex flex-col min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}