import Image from "next/image";
import React from "react";

export default function MusicSearchResult({
    album,
    artist,
    image,
    title,
}: {
    album: string;
    artist: string;
    image: string;
    title: string;
}) {
    return (
        <article className="my-2 cursor-pointer">
            <Image src={image} alt={title} width={200} height={200} />
            <section className="flex"></section>
            <h3>{title.length > 25 ? `${title.substring(0, 26)}...` : title}</h3>
            <p className="text-xs">
                {album.length > 25 ? `${album.substring(0, 28)}...` : album}
            </p>
            <p className="text-xs font-bold">
                {artist.length > 25 ? `${artist.substring(0, 28)}...` : artist}
            </p>
        </article>
    );
}
