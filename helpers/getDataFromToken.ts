import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface UserDecodedToken {
    id: string;
}

export const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get("token")?.value || "";

        if (token) {
            try {
                const decodedToken = jwt.verify(
                    token,
                    process.env.JWT_SECRET_KEY!
                ) as UserDecodedToken;
    
                return decodedToken.id;
            } catch (error) {
                console.error("Token is expired, clearing token...")
                return null;
            }
        } else {
            console.log("No token found");
            return null;
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
};
