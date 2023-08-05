"use client";
import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [gender, setGender] = useState<string>("male");
    const [disableSignUp, setDisableSignUp] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = {
                firstName,
                lastName,
                email,
                password,
                birthday,
                gender,
            };

            const res = await axios.post("/api/users/signup", payload);
            router.push("/");
        } catch (error: any) {
            console.error(error.message);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            email.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0 &&
            password.length > 0 &&
            birthday
        ) {
            setDisableSignUp(false);
        } else {
            setDisableSignUp(true);
        }
    }, [email, firstName, lastName, password, birthday]);

    return (
        <div className="w-full h-[65vh] flex flex-col items-center justify-center">
            <form
                onSubmit={(e) => handleSignUp(e)}
            >
                <h1 className="mt-48 sm:mt-0 text-xl font-semibold bg-navy-blue py-2 px-4 text-white sm:rounded-t-md">
                    {loading ? "Creating user profile..." : "Sign Up"}
                </h1>
                <section className="flex flex-col gap-4 pt-2 px-2 pb-4 sm:p-4 sm:border-gray-400 sm:border-x sm:border-b">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <input
                            disabled={loading}
                            className="border border-gray-400 px-2 py-1 rounded-sm"
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            value={firstName}
                            aria-label="First name"
                            placeholder="First name"
                        />
                        <input
                            disabled={loading}
                            className="border border-gray-400 px-2 py-1 rounded-sm"
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            value={lastName}
                            aria-label="Last name"
                            placeholder="Last name"
                        />
                    </div>

                    <input
                        disabled={loading}
                        className="border border-gray-400 px-2 py-1 rounded-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        aria-label="Email"
                        placeholder="Email"
                    />

                    <input
                        disabled={loading}
                        className="border border-gray-400 px-2 py-1 rounded-sm"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        aria-label="Password"
                        placeholder="Password"
                    />

                    <section className="flex flex-col gap-1">
                        <label
                            className="text-sm text-gray-600"
                            htmlFor="birthday"
                        >
                            Birthday
                        </label>
                        <input
                            disabled={loading}
                            className="border border-gray-400 px-2 py-1 rounded-sm"
                            onChange={(e) => setBirthday(e.target.value)}
                            type="date"
                            value={birthday}
                            aria-label="birthday"
                            id="birthday"
                        />
                    </section>

                    <section className="flex flex-col gap-1">
                        <div className="text-sm text-gray-600">Gender</div>

                        <div className="flex gap-2 w-full">
                            <div className="w-full flex justify-between gap-4 bg-gray-100 border-gray-200 border p-2 rounded-md hover:bg-gray-200">
                                <label htmlFor="male">Male</label>
                                <input
                                    disabled={loading}
                                    className="rounded-full "
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    checked={gender === "male"}
                                    onChange={() => setGender("male")}
                                />
                            </div>
                            <div className="w-full flex justify-between gap-4 bg-gray-100 border-gray-200 border p-2 rounded-md hover:bg-gray-200">
                                <label htmlFor="female">Female</label>
                                <input
                                    disabled={loading}
                                    className="rounded-full "
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    checked={gender === "female"}
                                    onChange={() => setGender("female")}
                                />
                            </div>
                            <div className="w-full flex justify-between gap-4 bg-gray-100 border-gray-200 border p-2 rounded-md hover:bg-gray-200">
                                <label htmlFor="other">Other</label>
                                <input
                                    disabled={loading}
                                    className="rounded-full "
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    checked={gender === "other"}
                                    onChange={() => setGender("other")}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4">
                        <span className="text-xs text-gray-500">
                            By clicking Sign Up, you agree to our Terms, Privacy
                            Policy and Cookies Policy.
                        </span>
                        <Link className="text-xs text-blue-400 hover:text-blue-500 hover:underline" href="/login">Already have an account?</Link>
                        <button
                            disabled={disableSignUp || loading}
                            className="disabled:bg-blue-500/40 disabled:cursor-not-allowed text-white bg-blue-500 py-2 rounded-sm hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </section>
                </section>
            </form>
        </div>
    );
}
