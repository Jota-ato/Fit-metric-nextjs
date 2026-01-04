import { Metadata } from "next";
import Navegation from "@/src/components/layout/Navegation";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
    title: "App - Fit Metric",
    description: "Track your diet and fitness",
};

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navegation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}