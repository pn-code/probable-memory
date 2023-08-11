import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getCurrentUser() {
    try {
        connectDB();
        const cookieStore = cookies();
        const token = cookieStore.get("token");

        // verify with JWT
        const user = jwt.verify(
            token?.value!,
            process.env.JWT_SECRET_KEY!
        ) as any;

        // isolate user id
        const userId = user.id;
        const currentUser = await User.findById(userId).select("-password").lean();

        return {...currentUser, _id: userId};
    } catch (error) {
        console.error("No user found");
    }
}
