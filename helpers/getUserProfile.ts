import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";

export async function getUserProfile(userId: string) {
    try {
        connectDB();

        const user = await User.findOne({ _id: userId })
            .select("-password")
            .lean();

        if (!user) {
            console.error("No user found in getUserProfile helper.");
            return null;
        }

        return { ...user, _id: userId };
    } catch (error: any) {
        console.error(error.message);
    }
}
