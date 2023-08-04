import Link from "next/link";
import React from "react";

function FeatureSection() {
    return (
        <div className="flex flex-col bg-blue-100 rounded-sm mr-8 px-4 py-2 gap-2 border-navy-blue/40 border">
            <ul className="flex justify-between text-blue-900">
                <li>
                    <Link className="hover:text-blue-400" href="/">Books</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Blogs</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Careers</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Chat Rooms</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Comedy</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Filmmakers</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Games</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Horoscopes</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-400" href="/">Schools</Link>
                </li>
            </ul>
        </div>
    );
}

export default FeatureSection;
