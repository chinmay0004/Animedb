import { useEffect } from "react";
import { useState } from "react";
import { getAllAnime, getPaginatedAnimes } from "../api/AnimeApi";
import AnimeCard from "../components/AnimeCard";

export function Home() {
    const [anime, setAnime] = useState([]);
    const [page, setPage] = useState(1);
    const[pagination, setPagination] = useState(null);

    useEffect(()=>{
        async function fetchAnime() {
             const response = await getPaginatedAnimes(page, 10)
             
             setAnime(response.data)
             setPagination(response.pagination)
        }
        fetchAnime();
    }, [page]);


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
        <div>
            {pagination?.totalPages &&
                Array.from(
                    { length: pagination.totalPages },
                    (_, index) => (
                        <button className="px-4
                                    py-2
                                    border-[3px]
                                    border-[#3B2F2A]
                                    bg-[#E8D7BD]
                                    text-[#3B2F2A]
                                    font-black
                                    uppercase
                                    shadow-[4px_4px_0px_#3B2F2A]
                                    transition-all
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-[6px_6px_0px_#3B2F2A]
                                    active:translate-y-0
                                    active:shadow-[2px_2px_0px_#3B2F2A]"
                            key={index}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )
                )
            }
            
        </div>
        </div>
    )
}