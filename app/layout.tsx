import type { Metadata } from "next";
import { openSans } from "./fonts";
import Header from "@/src/components/Hero";
import "@/app/globals.css"

export const metadata: Metadata = {
    title: "Fit Metric",
    description: "Fit Metric",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
