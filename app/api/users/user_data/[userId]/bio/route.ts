import { getDataFromToken } from "@/helpers/getDataFromToken";
import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    connectDB();

    try {
        // Get user id
        const userId = getDataFromToken(req);
        console.log("userId", userId);

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json("No user found", { status: 403 });
        }

        const reqBody = await req.json();
        const { bio } = reqBody;
        console.log("bio", bio);

        const updateUser = await User.findByIdAndUpdate(userId, {
            $set: {
                info: { bio },
            },
        });

        return NextResponse.json({ success: true, user: updateUser });
    } catch (error: any) {
        console.error(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
