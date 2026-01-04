import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "./themeScripts";
import Navegation from "@/src/components/layout/Navegation";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
    title: "Fit Metric",
    description: "Track your fitness journey",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <ThemeScript />
            </head>
            <body className="transition-colors duration-300 text-text-main">
                <Navegation />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}