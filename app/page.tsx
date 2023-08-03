import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import MemberLogin from "./components/Auth/MemberLogin";

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
        <main className="flex px-2">
            <section className="flex-[4]"></section>
            <MemberLogin />
        </main>
    );
}
