"use client";
import React, { useState } from "react";

export default function SignUp() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [gender, setGender] = useState<string>("male");

    const handleSignUp = async (e: Event) => {
        e.preventDefault();
        const payload = {
            firstName,
            lastName,
            email,
            password,
            birthday,
            gender,
        };
        console.log(payload);
    };

    return (
        <div className="w-full h-[65vh] flex flex-col items-center justify-center">
            <form
                onSubmit={(e) => handleSignUp(e)}
                className="border-gray-400 border-x border-b rounded-md"
            >
                <h1 className="mb-2 text-xl font-semibold bg-navy-blue py-2 px-4 text-white rounded-t-md">
                    Sign Up
                </h1>
                <section className="flex flex-col gap-4 p-4">
                    <div className="flex justify-between gap-4">
                        <input
                            className="border border-gray-400 px-2 py-1 rounded-sm"
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            value={firstName}
                            aria-label="First name"
                            placeholder="First name"
                        />
                        <input
                            className="border border-gray-400 px-2 py-1 rounded-sm"
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            value={lastName}
                            aria-label="Last name"
                            placeholder="Last name"
                        />
                    </div>

                    <input
                        className="border border-gray-400 px-2 py-1 rounded-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        aria-label="Email"
                        placeholder="Email"
                    />

                    <input
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
                        <button className="text-white bg-blue-500 py-2 rounded-sm hover:bg-blue-600">
                            Sign Up
                        </button>
                    </section>
                </section>
            </form>
        </div>
    );
}
