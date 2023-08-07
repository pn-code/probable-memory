"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserData {
    birthday: string;
    email: string;
    firstName: string;
    gender: string;
    isAdmin: boolean;
    isVerified: boolean;
    lastName: string;
    _id: string;
}

export default function ProfilePage({
    params,
}: {
    params: { userId: string };
}) {
    const [userData, setUserData] = useState<UserData>();

    console.log(userData);

    useEffect(() => {
        const getUserDetails = async () => {
            const res = await axios.get(
                `/api/users/user_data/${params.userId}`
            );
            setUserData(res.data.user);
        };

        getUserDetails();
    }, []);

    return (
        <main className="flex flex-col px-2">
            {/* Left Side */}
            <section>
                {/* Username */}
                {/* Favorite Music Genres */}
                {/* Image flexed with location */}
                {/* Music */}
                {/* Contact Information */}
                {/* DefinitelyNotMySpace URL */}
                {/* General Info */}
                {/* In General Info: Table detailing member since, influences */}
            </section>

            {/* Right Side */}
            <section>
                <header>
                    <h3 className="bg-orange-300/60 text-orange-600 font-semibold px-2">
                        About {`${userData?.firstName} ${userData?.lastName}`}
                    </h3>
                    <p className="text-sm px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer venenatis, enim non malesuada cursus, ante augue
                        feugiat diam, id maximus nulla ex et ante. Pellentesque
                        condimentum placerat porttitor. Etiam faucibus tristique
                        faucibus. Morbi convallis libero non lectus varius
                        vestibulum. Morbi mattis tortor a hendrerit ultrices.
                        Fusce cursus, metus ut egestas facilisis, enim mi
                        sollicitudin sapien, eget molestie arcu elit ut metus.

                    </p>
                </header>
                {/* About Section */}
            </section>
        </main>
    );
}
