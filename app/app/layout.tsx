import { Metadata } from "next";
import SideBar from "@/src/components/app/SideBar";

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
            <div className="lg:flex min-h-screen bg-background">
                <SideBar />
                <main className="flex justify-center items-center" style={{ flex: 1 }}>
                    {children}
                </main>
            </div>
        </>
    );
}