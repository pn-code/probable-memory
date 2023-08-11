"use client";
import MemberLogin from "@/components/auth/MemberLogin";
import FeatureSection from "@/components/navigation/FeatureSection";
import { UserContextProvider } from "@/contexts/UserContext";

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row px-2 md:gap-2">
            <section className="flex-[3]">
                <FeatureSection />
            </section>
            <UserContextProvider>
                <MemberLogin />
            </UserContextProvider>
        </main>
    );
}
