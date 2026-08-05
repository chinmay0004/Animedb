import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getAnimeById, getCharacters } from "../api/AnimeApi";


export default function AnimeDetails() {
    const { id } = useParams();

    const [anime, setAnime] = useState(null);
    const[characters, setCharacters] = useState([])
    const[seachParams] = useSearchParams();

    const page = seachParams.get("page") || 1

    useEffect(()=>{
        async function fetchCharacters() {
            const data = await getCharacters(id);
            setCharacters(data)
        }
        fetchCharacters()
    },[id])

    useEffect(() => {
        async function fetchAnime() {
            const data = await getAnimeById(id);
            setAnime(data[0]);
        }

        fetchAnime();
    }, [id]);

    if (!anime) {
        return (
            <div className="min-h-screen flex items-center justify-center text-3xl font-black">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EEDFC4] py-12 px-6">

            <div className="mx-auto max-w-6xl">

                <Link
                    to= {`/?page=${page}`}
                    className="inline-block mb-8 border-[3px] border-[#3B2F2A] bg-[#782F22] px-5 py-2 font-black uppercase tracking-wider text-[#F8F3EA] shadow-[4px_4px_0px_#3B2F2A]"
                >
                    ← Back To Archive
                </Link>

                <div className="border-y-[4px] border-[#3B2F2A] py-8 text-center">

                    <h1 className="text-6xl font-black uppercase text-[#782F22]">
                        {anime.title}
                    </h1>

                    <p className="mt-2 text-lg font-bold uppercase tracking-[5px]">
                        Issue No. {anime.external_id}
                    </p>

                </div>

                <div className="mt-10 grid lg:grid-cols-[340px_1fr] gap-10">

                    <div className="border-[4px] border-[#3B2F2A] bg-[#D8C7A8] p-4 shadow-[8px_8px_0px_#3B2F2A]">

                        <img
                            src={anime.image_url}
                            alt={anime.title}
                            className="w-full object-contain"
                        />

                    </div>

                    <div className="border-[4px] border-[#3B2F2A] bg-[#F4E9D8] p-8 shadow-[8px_8px_0px_#3B2F2A]">

                        <div className="grid grid-cols-2 gap-8">

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Status
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.status}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Episodes
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.episodes ?? "?"}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Score
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.score ?? "N/A"}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Rating
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.rating}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Aired
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.aired_from}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[4px] text-[#782F22]">
                                    Genres
                                </p>

                                <p className="mt-2 text-xl font-bold">
                                    {anime.genres}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <section className="mt-14">

                    <div className="border-y-[4px] border-[#3B2F2A] py-4">

                        <h2 className="text-3xl font-black uppercase tracking-[5px] text-[#782F22]">
                            Editor's Notes
                        </h2>

                    </div>

                    <div className="border-[4px] border-[#3B2F2A] bg-[#F4E9D8] p-8 shadow-[8px_8px_0px_#3B2F2A]">

                        <p className="leading-8 text-lg">
                            {anime.description}
                        </p>

                    </div>

                </section>

                <section className="mt-14">

                    <div className="mt-12 border-t-[3px] border-[#3B2F2A] pt-8">

                    <h2 className="uppercase text-3xl font-black tracking-[3px] text-[#782F22] mb-8">
                        Main Cast
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {characters.length > 0 ? (
                                characters.map((character) => (
                                    <div
                                        key={character.id}
                                        className="bg-[#F4E9D8] border-[3px] border-[#3B2F2A] shadow-[6px_6px_0px_#3B2F2A] overflow-hidden"
                                    >

                                        <img
                                            src={character.image_url}
                                            alt={character.name}
                                            className="w-full h-56 object-cover border-b-[3px] border-[#3B2F2A]"
                                        />

                                        <div className="p-4">

                                            <h3 className="font-black uppercase text-[#782F22] line-clamp-2">
                                                {character.name}
                                            </h3>

                                            <span className="inline-block mt-3 border-[2px] border-[#3B2F2A] bg-[#E8D7BD] px-3 py-1 text-xs font-bold uppercase">
                                                {character.role}
                                            </span>

                                        </div>

                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full border-[3px] border-dashed border-[#3B2F2A] bg-[#F4E9D8] p-10 text-center shadow-[6px_6px_0px_#3B2F2A]">

                                    <h3 className="text-2xl font-black uppercase text-[#782F22]">
                                        Character Archive In Progress
                                    </h3>

                                    <p className="mt-3 text-lg">
                                        We're still collecting character information for this anime.
                                        Check back later as the archive continues to grow.
                                    </p>

                                </div>
                            )}
                                                    
                    </div>

                </div>

                </section>

            </div>

        </div>
    );
}