import Link from "next/link";
import {
    AppWindow,
    CalendarHeart,
    Compass,
    Flame,
    Home,
    Laugh,
    Music,
    ScrollText,
    User,
    Users,
    Video,
} from "lucide-react";
import { getCurrentUser } from "@/helpers/getCurrentUser";

export default async function SubNavbar() {
    const currentUser = await getCurrentUser();

    return (
        <nav className="w-full hidden md:flex border-b border-navy-blue/50 mb-2">
            <ul className="flex w-full">
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Home />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Compass />
                        <span>Browse</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Flame />
                        <span>Trending</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <ScrollText />
                        <span>Blog</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <AppWindow />
                        <span>Forum</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Users />
                        <span>Groups</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <CalendarHeart />
                        <span>Events</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Video />
                        <span>Videos</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/discover"
                    >
                        <Music />
                        <span>Music</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href="/"
                    >
                        <Laugh />
                        <span>Comedy</span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4"
                        href={currentUser ? `/profile/${currentUser?._id}` : "/signup"}
                    >
                        <User />
                        <span>{currentUser ? "Profile" : "Sign Up"}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
