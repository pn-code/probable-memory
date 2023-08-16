"use client";
import MusicSearchResult from "@/components/discover/MusicSearchResult";
import useSpotifyToken from "@/hooks/useSpotifyToken";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi();

const Discover = () => {
    const accessToken = useSpotifyToken();
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        if (accessToken) {
            spotifyApi.setAccessToken(accessToken);
        }
    }, [accessToken]);

    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        spotifyApi.searchTracks(search).then((res) => {
            setSearchResults(
                res!.body!.tracks!.items.map((track) => {
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        album: track.album.name,
                        image: track.album.images[0].url,
                        id: track.id,
                    };
                })
            );
        });
    }, [search, accessToken]);

    return (
        <main className="flex justify-center items-center flex-col gap-4 w-full">
            <div className="mt-4 text-center p-6 text-2xl font-semibold border-y-4 border-red-500 md:w-1/2">
                <h1>Explore Popular Music and Songs</h1>
            </div>
            <div className="w-full sm:w-[800px] flex justify-center items-center gap-2">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Search your favorite music"
                    className="px-2 py-1 w-full h-10 border-2 border-gray-300"
                />
                <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-100 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Search
                </button>
            </div>

            {/* Music Container */}
            <section className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-4">
                    {searchResults.map((result) => (
                        <MusicSearchResult
                            title={result.title}
                            album={result.album}
                            artist={result.artist}
                            image={result.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Discover;
