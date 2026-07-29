//https://api.jikan.moe/v4/anime/20/full
import validateData from "../validator/validateData.js";
import transformData from "../transformations/dataTransformator.js";


async function syncAnime() {
    const response = await fetch('https://api.jikan.moe/v4/anime/20/full')
    const result = await response.json()

    const rawData = result.data

    const validationResult = validateData(rawData)

    if(!validationResult.isValid){
        console.log(validationResult.errors);
        return
    }

    const transformedAnime = transformData(validationResult.data)


    console.log("validation successful")

    console.log(transformedAnime)

   
}

syncAnime()

