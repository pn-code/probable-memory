import mongoose from "mongoose";

export default async function connectDB() {
    const MONGODB_URL = process.env.MONGODB_URL as string;

    if (!MONGODB_URL) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB", MONGODB_URL);
    } catch (error) {
        console.error(error);
    }
}
