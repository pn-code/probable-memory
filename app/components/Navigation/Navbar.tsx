import { Globe2, Users2 } from "lucide-react";
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-navy-blue text-[#FFFF] px-4 py-2 flex justify-between">
            {/* Left Side & Brand Logo & Home Navigation */}
            <header className="flex gap-4 items-center">
                <Users2 size={80} />
                <section className="flex flex-col items-end">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        definitely not myspace
                    </h1>
                    <span>not just a place for friends</span>
                </section>
            </header>

            {/* Right Side */}
            <section className="flex flex-col gap-1 items-end">
                {/* Upper Right Side */}
                <ul className="flex gap-2.5 text-sm mt-1">
                    <li className="flex gap-1 items-center">
                        <Globe2 size={16} /> International
                    </li>
                    <span>|</span>
                    <li>Help </li>
                    <span>|</span>
                    <li>Sign Up</li>
                </ul>

                {/* Bottom Right Side | Search Bar */}
                <form className="flex flex-col sm:min-w-[500px]">
                    <ul className="flex gap-2 text-sm text-gray-100">
                        <li>
                            <button>Web</button>
                        </li>
                        <span>|</span>
                        <li>
                            <button>People</button>
                        </li>
                        <span>|</span>
                        <li>
                            <button>Music</button>
                        </li>
                        <span>|</span>
                        <li>
                            <button>Blogs</button>
                        </li>
                        <span>|</span>
                        <li>
                            <button>Videos</button>
                        </li>
                        <span>|</span>
                        <li>
                            <button>Films</button>
                        </li>
                    </ul>
                    <section className="flex justify-between gap-4">
                        <input
                            className="w-full rounded-sm text-black text-sm px-1"
                            type="text"
                        />
                        <button className="bg-gray-100 text-black px-4 rounded-sm">
                            Search
                        </button>
                    </section>
                </form>
            </section>
        </nav>
    );
}
