//https://api.jikan.moe/v4/anime/20/full
import validateData from "../validator/validateData.js";
import transformData from "../transformations/dataTransformator.js";
import insertAnime from "../repository/animeRepository.js";


async function syncAnime() {
    const response = await fetch('https://api.jikan.moe/v4/top/anime')
    const result = await response.json()


    if (!response.ok) {
        console.log(`Request failed: ${response.status}`);
        return;
    }

    for(const rawData of result.data){
        const validationResult = validateData(rawData)

        if(!validationResult.isValid){
        console.log(validationResult.errors);
        continue;
    }

        const transformedAnime = transformData(validationResult.data)

        await insertAnime(transformedAnime);

        console.log(`Inserted: ${transformedAnime.title}`); 
    }
   console.log("sync completed, data is transformed")
}

syncAnime()

