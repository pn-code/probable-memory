import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserData | null>(null);

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function getUserData() {
            const res = await axios.get("/api/users/me");
            setUser(res.data.user);
        }

        getUserData();
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
