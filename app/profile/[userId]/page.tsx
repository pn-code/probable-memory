import UserHeader from "@/components/profile/UserHeader";
import formatDateFromISO from "@/helpers/formatDateFromISO";
import { getUserProfile } from "@/helpers/getUserProfile";
import {
    AlertTriangle,
    Mail,
    MessageCircle,
    Star,
    UserPlus,
    Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProfilePage({
    params,
}: {
    params: { userId: string };
}) {
    const user = await getUserProfile(params.userId);

    const userFullName = user ? `${user?.firstName} ${user?.lastName}` : "User";

    // Load user's profile
    // useEffect(() => {
    //     const getUserDetails = async () => {
    //         const res = await axios.get(
    //             `/api/users/user_data/${params.userId}`
    //         );
    //         setUserData(res.data.user);
    //     };

    //     getUserDetails();
    // }, []);

    return (
        <main className="xl:mx-[20%] flex flex-col px-2 gap-4 py-4 md:flex-row md:gap-10">
            {/* Left Side */}
            <section className="md:w-[460px] flex flex-col gap-4">
                {/* Profile Section */}
                <div className="flex flex-col gap-4">
                    {/* Name & Title */}
                    <UserHeader
                        userId={user?._id!}
                        fullName={userFullName}
                        title={user?.title || ""}
                    />

                    {/* User Picture, Status, and Location */}
                    <section className="w-full flex gap-8 items-center">
                        <Image
                            src={user?.info.profileImageUrl!}
                            alt={`${userFullName} profile image`}
                            height={300}
                            width={200}
                        />

                        <div className="block text-sm">
                            <div className="">{user?.info.status}</div>
                            <p>{user?.info.location}</p>
                        </div>
                    </section>
                </div>

                {/* Music */}

                {/* Contact Information */}
                <section className="border-2 border-blue-400 text-white font-semibold">
                    <h3 className="px-2 bg-blue-400 text-white font-semibold">
                        Contact {userFullName}
                    </h3>
                    <ul className="grid grid-cols-2 gap-1 bg-gray-50 p-2 text-blue-900">
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
                                <MessageCircle />
                                <p>Send Message</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
                                <Mail />
                                <p>Send Email</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
                                <UserPlus />
                                <p>Add to Friends</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
                                <Users2 />
                                <p>Add to Group</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
                                <Star />
                                <p>Add to Favorites</p>
                            </div>
                        </li>
                        <li>
                            <div className="w-fit flex gap-2 items-center text-sm font-normal hover:text-blue-500 cursor-pointer">
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
                        className="text-sm text-blue-900 hover:text-blue-500 underline"
                        href={`/profile/${params.userId}`}
                    >{`/profile/${params.userId}`}</Link>
                </section>

                {/* General Info */}
                <section className="h-full w-full border-2 border-blue-400 text-white font-semibold">
                    <h3 className="bg-blue-400 px-2">
                        {userFullName}: General Info
                    </h3>
                    <div className="w-full p-1">
                        <div className="flex w-full">
                            <div>
                                <div className="w-[110px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Member Since
                                </div>
                            </div>
                            <div>
                                <div className=" text-left px-2 bg-blue-100 text-gray-900 m-1 py-1 text-sm w-full">
                                    {user
                                        ? formatDateFromISO(user?.created_at)
                                        : ""}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div>
                                <div className="w-[110px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Influences
                                </div>
                            </div>
                            <div>
                                <div className="text-left px-2 bg-blue-100 text-gray-900 m-1 py-1 text-sm w-full">
                                    {user?.info.influences}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div>
                                <div className="w-[110px] text-left bg-blue-200 text-blue-600 m-1 py-1 px-2 text-sm">
                                    Hobbies
                                </div>
                            </div>
                            <div>
                                <div className="text-left px-2 bg-blue-100 text-gray-900 m-1 py-1 text-sm w-full">
                                    {user?.info.hobbies}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Right Side */}
            <section className="md:w-[800px]">
                <header>
                    <h3 className="bg-orange-300/60 text-orange-600 font-semibold px-2">
                        About {userFullName}
                    </h3>
                    <p className="text-sm px-2 mt-1">{user?.info.bio}</p>
                </header>
                {/* About Section */}
            </section>
        </main>
    );
}
