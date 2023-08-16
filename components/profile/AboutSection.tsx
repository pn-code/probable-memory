import React from "react";

export default function AboutSection({
    userFullName,
    bio,
}: {
    userFullName: string;
    bio: string | undefined;
}) {
    return (
        <div>
            <header className="flex justify-between bg-orange-300/60 text-orange-600 font-semibold">
                <h3 className="px-2">About {userFullName}</h3>
                <button className="bg-blue-600 text-white px-4 hover:bg-blue-400">Edit</button>
            </header>
            <p className="text-sm px-2 mt-1">{bio || "None"}</p>
        </div>
    );
}
