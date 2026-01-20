import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientTrust from "@/components/home/ClientTrust";
import CTASection from "@/components/home/CTASection";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <ClientTrust />
            <CTASection />
        </>
    );
}
