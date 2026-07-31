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
        <div className="min-h-screen bg-[#EEDFC4] py-16 px-8">
        <div className="mx-auto max-w-7xl">
            <h1 className="mb-10 text-5xl font-bold text-[#2C2C2C]">AnimeDB</h1>

            <div className="grid justify-items-center gap-x-14 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
                {anime.map(item =>(
                    <AnimeCard key={item.id} anime={item} />
                ))}
            </div>
        </div>
        </div>
    )
}