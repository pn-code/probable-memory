import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState(null);
    const [updateUser, setUpdateUser] = useState(false);

    useEffect(() => {
        async function getUserData() {
            try {
                const res = await axios.get("/api/users/me");
                setUser(res.data.user);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch user data");
            } finally {
                if (updateUser === true) {
                    setUpdateUser(false);
                }
            }
        }

        getUserData();
    }, [updateUser]);

    return (
        <UserContext.Provider value={{ user, setUpdateUser }}>
            {children}
        </UserContext.Provider>
    );
};
