import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ url: process.env.CLOUDINARY_URL });
}
