import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please provide a first name"],
        },
        lastName: {
            type: String,
            required: [true, "Please provide a last name"],
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide an email"],
        },
        birthday: {
            type: String,
            required: [true, "Please provide a birthday"],
        },
        gender: {
            type: String,
            required: [true, "Please provide a gender"],
        },
        info: {
            profileImageUrl: { type: String },
            influences: { type: String },
            location: { type: String },
            hobbies: { type: String },
            status: { type: String },
            bio: { type: String },
            title: { type: String },
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
    },
    { timestamps: { createdAt: "created_at" } }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
