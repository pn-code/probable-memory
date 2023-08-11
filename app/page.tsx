import MemberLogin from "@/components/auth/MemberLogin";
import FeatureSection from "@/components/navigation/FeatureSection";
import { getCurrentUser } from "@/helpers/getCurrentUser";

export default async function Home() {
    const currentUser = await getCurrentUser();

    return (
        <main className="flex flex-col md:flex-row px-2 md:gap-2">
            <section className="flex-[3]">
                <FeatureSection />
            </section>
            {!currentUser && <MemberLogin />}
        </main>
    );
}
