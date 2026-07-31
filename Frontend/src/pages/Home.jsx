import { useEffect } from "react";
import { useState } from "react";
import { getAllAnime } from "../api/AnimeApi";
import AnimeCard from "../components/AnimeCard";

export function Home() {
    const [anime, setAnime] = useState([]);

    useEffect(()=>{
        async function fetchAnime() {
             const data = await getAllAnime();
             
             setAnime(data)
        }
        fetchAnime();
    }, []);


    return(
        <div className="min-h-screen bg-[#F8F3E8] p-10">
        <div className="mx-auto max-w-7xl">
            <h1 className="mb-10 text-5xl font-bold text-[#2C2C2C]">AnimeDB</h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {anime.map(item =>(
                    <AnimeCard key={item.id} anime={item} />
                ))}
            </div>
        </div>
        </div>
    )
}