import { Globe2, Users2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-navy-blue text-[#FFFF] px-4 py-2 flex justify-between">
            {/* Left Side & Brand Logo & Home Navigation */}
            <Link href="/" className="flex gap-4 items-center">
                <Users2 size={80} />
                <section className="flex flex-col items-end">
                    <h1 className="text-xl sm:text-3xl font-semibold tracking-tight">
                        definitely not myspace
                    </h1>
                    <span className="text-xs sm:text-[16px]">not just a place for friends</span>
                </section>
            </Link>

            {/* Right Side */}
            <section className="hidden md:flex flex-col gap-1 items-end">
                {/* Upper Right Side */}
                <ul className="flex gap-2.5 text-sm mt-1">
                    <li>
                        <Link className="flex gap-1 items-center hover:text-gray-300" href="/">
                            <Globe2 size={16} /> International
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link className=" hover:text-gray-300"  href="/">Help</Link>{" "}
                    </li>
                    <span>|</span>
                    <li>
                        <Link className=" hover:text-gray-300"  href="/">Sign Up</Link>
                    </li>
                </ul>

                {/* Bottom Right Side | Search Bar */}
                <form className="flex flex-col sm:min-w-[500px] gap-1">
                    <ul className="flex gap-2 text-sm text-gray-100">
                        <li className="hover:text-gray-300">
                            <button>Web</button>
                        </li>
                        <span>|</span>
                        <li className="hover:text-gray-300">
                            <button>People</button>
                        </li>
                        <span>|</span>
                        <li className="hover:text-gray-300">
                            <button>Music</button>
                        </li>
                        <span>|</span>
                        <li className="hover:text-gray-300">
                            <button>Blogs</button>
                        </li>
                        <span>|</span>
                        <li className="hover:text-gray-300">
                            <button>Videos</button>
                        </li>
                        <span>|</span>
                        <li className="hover:text-gray-300">
                            <button>Films</button>
                        </li>
                    </ul>
                    <section className="flex justify-between gap-2">
                        <input
                            className="w-full rounded-sm text-black text-sm px-1"
                            type="text"
                        />
                        <button className="bg-gray-100 text-black px-4 rounded-sm hover:bg-gray-300">
                            Search
                        </button>
                    </section>
                </form>
            </section>
        </nav>
    );
}
