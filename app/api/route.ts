import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDB";



export async function GET(req: Request, res: Response) {
    const db = await connectDB();
    
    return NextResponse.json({ success: true });
}
