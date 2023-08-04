import React from "react";
import Link from "next/link";
import {
    AppWindow,
    CalendarHeart,
    Compass,
    Flame,
    Home,
    Info,
    Laugh,
    Music,
    ScrollText,
    Users,
    Video,
} from "lucide-react";

export default function SubNavbar() {
    return (
        <nav className="border-b border-navy-blue/50 mb-2">
            <ul className="flex w-full">
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Home />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Compass />
                        <span>Browse</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Flame/>
                        <span>Trending</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <ScrollText />
                        <span>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <AppWindow />
                        <span>Forum</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Users />
                        <span>Groups</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <CalendarHeart />
                        <span>Events</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Video />
                        <span>Videos</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Music />
                        <span>Music</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Laugh />
                        <span>Comedy</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex flex-col text-gray-600 justify-center items-center text-sm hover:bg-blue-500 ease-linear duration-200 hover:text-gray-100 p-4 w-[10vw]"
                        href="/"
                    >
                        <Info />
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
