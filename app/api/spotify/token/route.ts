import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string;

const data = new URLSearchParams();
data.append("grant_type", "client_credentials");
data.append("client_id", client_id);
data.append("client_secret", client_secret);

export async function GET(req: NextRequest) {
    try {
        const res = await axios.post(
            "https://accounts.spotify.com/api/token",
            data,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return NextResponse.json({ ...res.data, clientId: client_id });
    } catch (error: any) {
        console.error(error.message);
    }
}
