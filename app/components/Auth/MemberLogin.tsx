"use client";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MemberLogin() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [disableLogin, setDisableLogin] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setDisableLogin(false);
        } else {
            setDisableLogin(true);
        }
    }, [email, password]);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = { email, password };
            const res = await axios.post("/api/users/login", payload);
            console.log(res.data)
            toast.success("Login success!")
        } catch (error: any) {
            console.error(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={(e) => handleLogin(e)}
            className="flex-1 border-navy-blue border-2 rounded-sm my-2"
        >
            <h2 className="w-full bg-navy-blue text-white pl-4 py-1 font-semibold">
                {loading ? "Logging in" :  "Member Login"}
            </h2>
            <section className="flex flex-col gap-4 p-4 max-w-[320px]">
                <section className="flex gap-2 justify-between">
                    <label className="flex justify-end w-full" htmlFor="email">
                        Email:{" "}
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[180px] border-gray-400 border rounded-sm px-1 text-sm py-0.5"
                        type="text"
                        id="email"
                        value={email}
                    />
                </section>
                <section className="flex gap-2 justify-between">
                    <label
                        className="flex justify-end w-full"
                        htmlFor="password"
                    >
                        Password:{" "}
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        className="w-[180px] border-gray-400 border rounded-sm px-1 text-sm py-0.5"
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
                    <button
                        disabled={disableLogin || loading}
                        type="submit"
                        className="disabled:cursor-not-allowed text-center text-navy-blue border border-blue-900 rounded-sm py-1 px-4 bg-gray-100 hover:bg-gray-200"
                    >
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
