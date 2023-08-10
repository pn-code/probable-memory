"use client";
import { useState } from "react";
import defaultProfile from "@/public/assets/users/default_profile.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

export default function AccountForm() {
    const [profileImage, setProfileImage] = useState<string>(
        defaultProfile.src
    );
    const [hobbies, setHobbies] = useState("");
    const [influences, setInfluences] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // Renders image preview for post creation
    const addImageToPreview = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent: any) => {
            console.log(readerEvent.target.result);
            setProfileImage(readerEvent.target.result);
        };
    };

    const handleImageUpload = async (event: any) => {
        event.preventDefault();
        const file = profileImage;

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "mighty-uploads");

            const { data } = await axios.post(
                CLOUDINARY_URL as string,
                formData
            );

            return data.secure_url;
        }
    };

    const handleSubmitOnboardInfo = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const profileImageUrl = await handleImageUpload(e);
            const payload = {
                hobbies,
                influences,
                location,
                bio,
                profileImageUrl,
            };

            const res = await axios.post("/api/users/onboarding", payload);
            toast.success("You successfully completed your user profile.")
            router.push(`/profile/${res.data.user._id}`)
        } catch (error) {
            console.error("Ran into an error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmitOnboardInfo(e)}
            className="w-full p-4 flex flex-col gap-4"
        >
            {/* Account Image */}
            <section className="w-full flex gap-6 items-center">
                <div className="flex flex-col gap-3">
                    <label className="font-semibold text-lg" htmlFor="image">
                        Profile Image
                    </label>
                    <input
                        onChange={addImageToPreview}
                        type="file"
                        id="image"
                        name="image"
                    />
                </div>
            </section>
            <div className="w-64 h-fit object-contain">
                <img
                    className="w-full rounded-sm"
                    src={profileImage}
                    alt="profile image"
                />
            </div>

            {/* Hobbies */}
            <section className="flex flex-col gap-2">
                <label className="font-semibold text-lg" htmlFor="hobbies">
                    Hobbies
                </label>

                <input
                    className="border border-gray-400 rounded-sm text-sm px-2 py-1"
                    id="hobbies"
                    name="hobbies"
                    type="text"
                    placeholder="Sports, music, art, business, etc"
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                />
            </section>

            <section className="flex flex-col gap-2">
                <label className="font-semibold text-lg" htmlFor="influences">
                    Influences
                </label>

                <input
                    className="border border-gray-400 rounded-sm text-sm px-2 py-1"
                    id="influences"
                    name="influences"
                    type="text"
                    placeholder="Your favorite people"
                    value={influences}
                    onChange={(e) => setInfluences(e.target.value)}
                />
            </section>

            <section className="flex flex-col gap-2">
                <label className="font-semibold text-lg" htmlFor="location">
                    Location
                </label>

                <input
                    className="border border-gray-400 rounded-sm text-sm px-2 py-1"
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Put somewhere on Earth...but not your address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </section>

            <section className="flex flex-col gap-2">
                <label className="font-semibold text-lg" htmlFor="location">
                    Your Bio
                </label>

                <textarea
                    className="border border-gray-400 rounded-sm text-sm px-2 py-1"
                    id="bio"
                    name="bio"
                    placeholder="I'm a new user! Here are some things you should know about me..."
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </section>

            <section className="flex gap-2 w-full justify-end">
                <button
                    disabled={loading}
                    type="submit"
                    className="bg-navy-blue text-white rounded-sm px-4 py-2 text-lg hover:bg-blue-700"
                >
                    Submit
                </button>
                <Link
                    className="bg-gray-800 text-white rounded-sm px-4 py-2 text-lg hover:bg-gray-700"
                    href="/"
                >
                    Skip
                </Link>
            </section>
        </form>
    );
}
