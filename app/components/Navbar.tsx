import { Globe2, Users2 } from "lucide-react";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-navyblue text-[#FFFF] px-4">
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
            <section>
                <ul>
                    <li>
                        <Globe2 /> International
                    </li>
                    <li>Help</li>
                    <li>Sign Up</li>
                </ul>
            </section>
        </nav>
    );
}
