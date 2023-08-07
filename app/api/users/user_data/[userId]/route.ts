import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connectDB from "@/lib/connectDB";

connectDB();

export async function GET(req: NextRequest, { params }: { params: { userId: string }}) {
    try {
        const userId = params.userId;

        const user = await User.findOne({ _id: userId }).select("-password");

        if (!user) {
            return NextResponse.json(
                { error: "No user found" },
                { status: 403 }
            );
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
        console.error(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
