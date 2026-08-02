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
             const response = await getPaginatedAnimes(page, 15)
             
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
        <div className="mt-16 flex items-center justify-center gap-4 border-y-[3px] border-[#3B2F2A] bg-[#E8D7BD] py-5">
    <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="border-[3px] border-[#3B2F2A] bg-[#782F22] px-5 py-2 font-black uppercase tracking-wider text-[#F7F1E8] shadow-[4px_4px_0px_#3B2F2A] transition hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3B2F2A] disabled:cursor-not-allowed disabled:opacity-40"
    >
        ← Previous
    </button>

    {pagination?.totalPages &&
        Array.from({ length: pagination.totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`h-12 w-12 border-[3px] border-[#3B2F2A] font-black shadow-[4px_4px_0px_#3B2F2A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3B2F2A] ${
                    page === index + 1
                        ? "bg-[#782F22] text-[#F8F3EA]"
                        : "bg-[#E8D7BD] text-[#3B2F2A]"
                }`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </button>
                ))}

                <button
                    disabled={page === pagination?.totalPages}
                    onClick={() => setPage(page + 1)}
                    className="border-[3px] border-[#3B2F2A] bg-[#782F22] px-5 py-2 font-black uppercase tracking-wider text-[#F7F1E8] shadow-[4px_4px_0px_#3B2F2A] transition hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3B2F2A] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Next →
                </button>
            </div>
        </div>
    )
}