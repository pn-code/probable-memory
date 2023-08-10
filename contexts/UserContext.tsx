import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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
            const res = await axios.get("/api/users/me");
            setUser(res.data.user);
        }

        getUserData();
    }, [updateUser]);

    return <UserContext.Provider value={{user, setUpdateUser}}>{children}</UserContext.Provider>;
};
