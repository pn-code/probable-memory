import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
mongoose.set("strictQuery", true);

export default async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB", MONGODB_URL);
    } catch (error) {
        console.error(error);
    }
}
