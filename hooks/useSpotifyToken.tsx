import { useState, useEffect } from "react";
import axios from "axios";

export default function useSpotifyToken() {
    const [accessToken, setAccessToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
            .get("/api/spotify/token")
            .then((res) => {
                setAccessToken(res.data.access_token);
                setExpiresIn(res.data.expires_in);
            })
            .catch((error: any) => {
                console.error(error.message)
            });
    }, []);

    useEffect(() => {
        if (!accessToken || !expiresIn) return;
        const interval = setInterval(() => {
            axios
                .get("/api/spotify/token")
                .then((res) => {
                    setAccessToken(res.data.access_token);
                    setExpiresIn(res.data.expires_in);
                })
                .catch((error) => {
                    console.error(error.message)
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [accessToken, expiresIn]);

    return accessToken;
}
