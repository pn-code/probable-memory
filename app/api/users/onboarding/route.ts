import { getDataFromToken } from "@/helpers/getDataFromToken";
import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { hobbies, location, bio, influences, profileImageUrl } = reqBody;

        const userId = getDataFromToken(req);

        if (!userId) {
            return NextResponse.json(
                { error: "No user found" },
                { status: 403 }
            );
        }

        const user = await User.findByIdAndUpdate(userId, {
            $set: {
                info: { hobbies, location, bio, influences, profileImageUrl },
            },
        });

        const savedUser = await user.save();

        return NextResponse.json({ status: "complete", user: savedUser });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
