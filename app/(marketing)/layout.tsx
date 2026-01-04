import { Metadata } from "next";
import Navegation from "@/src/components/ui/Navegation";
import Footer from "@/src/components/ui/Footer";

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