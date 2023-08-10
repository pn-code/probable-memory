import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connectDB from "@/lib/connectDB";

connectDB();

export async function GET(req: NextRequest) {
    try {
        const userId = getDataFromToken(req);

        if (!userId) {
                const response = NextResponse.json({ user: null });
        
                response.cookies.set("token", "", {
                    httpOnly: true,
                    expires: new Date(0),
                });
        
                return response;
        }

        const user = await User.findOne({ _id: userId }).select("-password");

        if (!user) {
            return NextResponse.json(
                { error: "User is not signed in properly" },
                { status: 403 }
            );
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
        console.error(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
