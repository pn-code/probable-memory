import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import MemberLogin from "@/components/auth/MemberLogin";
import FeatureSection from "@/components/navigation/FeatureSection";

const query = gql`
    query Now {
        now(id: "1")
    }
`;

export default async function Home() {
    // For Server-Side Rendering
    const { data } = await getClient().query({
        query,
        context: {
            fetchOptions: {
                next: { revalidate: 5 },
            },
        },
    });

    return (
        <main className="flex flex-col md:flex-row px-2 md:gap-2">
            <section className="flex-[3]">
                <FeatureSection />
            </section>
            <MemberLogin />
        </main>
    );
}
