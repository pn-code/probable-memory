import Image from "next/image";
import React from "react";
import defaultProfile from "@/public/assets/users/default_profile.png";
import Link from "next/link";

export default function AccountForm() {
    return (
        <form className="w-full p-4 flex flex-col gap-4">
            {/* Account Image */}
            <section className="w-full flex gap-6 items-center">
                <Image
                    className="w-32"
                    src={defaultProfile}
                    alt="profile image"
                />
                <div className="flex flex-col gap-3">
                    <label className="font-semibold text-lg" htmlFor="image">
                        Profile Image
                    </label>
                    <input type="file" id="image" name="image" />
                </div>
            </section>

            {/* Bio */}

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
                />
            </section>

            <section className="flex gap-2 w-full justify-end">
                <button className="bg-navy-blue text-white rounded-sm px-4 py-2 text-lg hover:bg-blue-700">Submit</button>
                <Link  className="bg-gray-800 text-white rounded-sm px-4 py-2 text-lg hover:bg-gray-700" href="/">Skip</Link>
            </section>
        </form>
    );
}
