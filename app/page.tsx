import Hero from "@/src/components/home/Hero";
import FirstSection from "@/src/components/home/FirstSection";
import Features from "@/src/components/home/Features";
import FatSecretPlatform from "@/src/components/home/FatSecretPlatform";
import Reports from "@/src/components/home/reports";

export default function Home() {
    return (
        <>
            <Hero />
            <FirstSection />
            <Features />
            <FatSecretPlatform />
            <Reports />
        </>
    );
}
