"use client";
import axios from "axios";
import {
    AlertTriangle,
    Mail,
    MessageCircle,
    Star,
    User,
    UserPlus,
    Users2,
} from "lucide-react";
import Link from "next/link";
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
    const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

    console.log(HOST_URL);
    const [userData, setUserData] = useState<UserData>();
    const userFullName = `${userData?.firstName} ${userData?.lastName}`;

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
        <main className="flex flex-col px-2 gap-4 py-4">
            {/* Left Side */}
            <section className="flex flex-col gap-4">
                {/* Profile Section */}

                {/* Music Preferences */}
                <section className="px-2">
                    <h2 className="font-semibold text-lg">{userFullName}</h2>
                    <span className="text-sm font-semibold">
                        Hip Hop / Alt Rock
                    </span>
                </section>

                {/* User Picture, Status, and Location */}
                <section className="flex gap-4 items-center">
                    <User size={160} />

                    <div className="block text-sm">
                        <div className="">Here is my status</div>
                        <p>California</p>
                        <p>United States</p>
                    </div>
                </section>
                {/* Music */}

                {/* Contact Information */}
                <section className="border-2 border-blue-400 text-white font-semibold">
                    <h3 className="px-2 bg-blue-400 text-white font-semibold">
                        Contact {userFullName}
                    </h3>
                    <ul className="grid grid-cols-2 gap-1 bg-gray-50 p-2 text-blue-600">
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <MessageCircle />
                                <p>Send Message</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <Mail />
                                <p>Send Email</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <UserPlus />
                                <p>Add to Friends</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <Users2 />
                                <p>Add to Group</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <Star />
                                <p>Add to Favorites</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-800 cursor-pointer">
                                <AlertTriangle />
                                <p>Block User</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* DefinitelyNotMySpace URL */}
                <section className="w-full px-2 py-1 border border-gray-800 rounded-sm">
                    <h3 className="font-semibold">DefinitelyNotMySpace URL</h3>
                    <Link
                        className="text-sm text-navy-blue underline"
                        href={`/profile/${params.userId}`}
                    >{`${HOST_URL}/profile/${params.userId}`}</Link>
                </section>

                {/* General Info */}

                <section className="border-2 border-blue-400 text-white font-semibold">
                    <h3 className="bg-blue-400 px-2">
                        {userFullName}: General Info
                    </h3>
                    <table className="w-full h-full">
                        <tr>
                            <th>
                                <div className="w-[115px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Member Since
                                </div>
                            </th>
                            <td className="w-full h-full">
                                <div className=" text-left bg-blue-100 text-gray-900 m-1 py-1 px-2 text-sm">
                                    3/1/2010
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="w-[115px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Influences
                                </div>
                            </th>
                            <td className="w-full h-full">
                                <div className="text-left bg-blue-100 text-gray-900 m-1 py-1 px-2 text-sm">
                                    Eminem, Drake, Lil Wayne, Linkin Park
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div className="w-[115px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Hobbies
                                </div>
                            </th>
                            <td className="w-full h-full">
                                <div className="text-left bg-blue-100 text-gray-900 m-1 py-1 px-2 text-sm">
                                    Dogging my butter
                                </div>
                            </td>
                        </tr>
                    </table>
                </section>
                {/* In General Info: Table detailing member since, influences */}
            </section>

            {/* Right Side */}
            <section>
                <header>
                    <h3 className="bg-orange-300/60 text-orange-600 font-semibold px-2">
                        About {userFullName}
                    </h3>
                    <p className="text-sm px-2 mt-1">
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
