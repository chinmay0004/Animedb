export default function AnimeCard({anime}){


    return(
        <div className="group bg-[#FFFDF8] border-2 border-[#4B3F35] rounded-xl overflow-hidden shadow-[6px_6px_0px_#4B3F35] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_#4B3F35]">
            <div className="overflow-hidden">
                <img src={anime.image_url} alt={anime.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>

            <div className="p-5">
                <h2 className="mt-4 text-xl font-bold text-[#2C2C2C] line-clamp-2">{anime.title}</h2>
                <span className="inline-block rounded-full border border-[#8B3A3A] bg-[#F8E8E3] px-3 py-1 text-xs font-semibold text-[#8B3A3A]" >{anime.status}</span>
                <p className="mt-3 text-sm leading-6 text-[#5C5C5C] line-clamp-3">{anime.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#D8CFC3] pt-4">
                <p className="text-xs uppercase tracking-widest text-[#8B3A3A]">Episodes</p>
                <p className="font-semibold text-[#2C2C2C]">{anime.episodes ?? "?"}</p>
            </div>
        </div>
    )
}