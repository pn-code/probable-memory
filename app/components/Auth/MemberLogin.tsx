import Link from "next/link";
import React from "react";

export default function MemberLogin() {
    return (
        <form className="flex-1 border-navy-blue border-2">
            <h2 className="w-full bg-navy-blue text-white pl-4 py-1 font-semibold">
                Member Login
            </h2>
            <section className="flex flex-col gap-4 p-4 max-w-[320px]">
                <section className="flex gap-2 justify-between">
                    <label className="flex justify-end w-full" htmlFor="email">Email: </label>
                    <input
                        className="w-[180px] border-gray-400 border rounded-sm"
                        type="text"
                    />
                </section>
                <section className="flex gap-2 justify-between">
                    <label className="flex justify-end w-full" htmlFor="password">Password: </label>
                    <input
                        className="w-[180px] border-gray-400 border rounded-sm"
                        type="password"
                    />
                </section>
                <section className="flex gap-2 justify-center ml-10">
                    <input
                        className="border-gray-400 border rounded-sm"
                        type="checkbox"
                    />
                    <label className="text-sm" htmlFor="remember">
                        Remember Me
                    </label>
                </section>
                <section className="flex justify-end gap-2">
                    <button className="text-center text-navy-blue border border-blue-900 rounded-sm py-1 px-4 bg-gray-100 hover:bg-gray-200">
                        LOGIN
                    </button>
                    <Link
                        className="text-center text-white bg-orange-500 border border-orange-700 rounded-sm py-1 px-4 hover:bg-orange-600"
                        href="/signup"
                    >
                        SIGN UP!
                    </Link>
                </section>
            </section>
            <Link
                className="flex justify-end text-blue-600 hover:text-navy-blue pb-2 pr-2 text-sm hover:underline font-bold"
                href="/signup"
            >
                Forgot your password?
            </Link>
        </form>
    );
}
