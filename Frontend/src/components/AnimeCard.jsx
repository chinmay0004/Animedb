export default function AnimeCard({anime}){


    return(
    <article className="group w-[320px] bg-[#F4E9D8] border-[3px] border-[#3B2F2A] shadow-[8px_8px_0px_#3B2F2A] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#3B2F2A]">


      <div className="flex justify-between items-center px-4 py-2 border-b-[3px] border-[#3B2F2A] bg-[#E8D7BD]">

        <h2 className="uppercase font-black text-2xl leading-none tracking-tight text-[#782F22] line-clamp-2">
          {anime.title}
        </h2>

        <span className="text-xs font-bold border-2 border-[#3B2F2A] px-2 py-1 bg-[#F8F3EA]">
          #{anime.external_id}
        </span>

      </div> 

      <div className="p-4">

        <div className="border-[3px] border-[#3B2F2A] bg-[#D7C5A8]">

          <img
            src={anime.image_url}
            alt={anime.title}
            className="w-full h-full object-contain bg-[#D7C5A8]"
          />

        </div>

      </div>


      <div className="px-4">

        <span className="uppercase text-xs font-black tracking-[2px]">
          STATUS
        </span>

        <div className="inline-block ml-3 border-2 border-[#3B2F2A] px-3 py-1 bg-[#EFE5D6] text-sm font-bold uppercase">

          {anime.status}

        </div>

      </div>

     

      <div className="px-4 py-3">

        <p className="text-[15px] leading-7 text-[#332B25] line-clamp-3">

          {anime.description}

        </p>

      </div>

    

      <div className="border-t-[3px] border-[#3B2F2A] flex justify-between items-center px-4 py-3 bg-[#E8D7BD]">

        <div>

          <p className="uppercase text-xs tracking-[3px] text-[#7A3A28]">

            Episodes

          </p>

          <p className="text-3xl font-black">

            {anime.episodes ?? "?"}

          </p>

        </div>

        <button className="uppercase border-[3px] border-[#3B2F2A] bg-[#782F22] text-[#F7F1E8] px-5 py-2 font-bold hover:bg-[#5D241A] transition">

          View →

        </button>

      </div>

    </article>
    )
}