import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { firstName, lastName, email, password } = reqBody;
        console.log(reqBody);

        // Check if user already exists
        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = await new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        return NextResponse.json(
            {
                success: true,
                message: "User created successfully",
                savedUser,
            },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
