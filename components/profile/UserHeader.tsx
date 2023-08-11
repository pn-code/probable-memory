"use client";

import { UserContext } from "@/contexts/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export default function UserHeader({
    fullName,
    title,
    userId,
}: {
    fullName: string;
    title: string;
    userId: string;
}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = useContext(UserContext);
    const currentUser = user?.user || null

    const isCurrentUserProfile =
        currentUser?._id != null && currentUser?._id === userId;

    const handleUserLogOut = async () => {
        try {
            setLoading(true);
            const res = await axios.get("/api/users/logout");
            console.log(res);
            toast.success("You have been logged out. Redirecting...");
            router.replace("/");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("An error has occurred while logging out.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full flex justify-between">
            <div>
                <h2 className="font-bold text-xl">{fullName}</h2>
                <span className="text-sm font-semibold">{title}</span>
            </div>
            {(false || isCurrentUserProfile) && (
                <button
                    onClick={handleUserLogOut}
                    disabled={loading}
                    type="button"
                    className="disabled:bg-gray-600 text-sm bg-red-500 rounded-sm px-4 py-2 font-semibold text-white hover:bg-red-600"
                >
                    Log Out
                </button>
            )}
        </section>
    );
}
