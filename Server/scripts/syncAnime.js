//https://api.jikan.moe/v4/anime/20/full
import validateData from "../validator/validateData.js";
import transformData from "../transformations/dataTransformator.js";
import insertAnime from "../repository/animeRepository.js";
import characterTransform from "../transformations/characterTransformation.js";
import ValidateCharacters from "../validator/characterValidations.js";
import insertCharacter from "../repository/characterRepository.js";

async function syncAnime() {

    for(let page = 1; page <= 2; page++){
        console.log(`fetching page: ${page}`)
        const response = await fetch( `https://api.jikan.moe/v4/top/anime?page=${page}`)

        if (!response.ok) {
        console.log(`Request failed: ${response.status}`);
        continue;
    }

        const result = await response.json()

        for(const rawData of result.data){
        const validationResult = validateData(rawData)

        if(!validationResult.isValid){
        console.log(validationResult.errors);
        continue;
        }

        const transformedAnime = transformData(validationResult.data)

       const insertedAnime =  await insertAnime(transformedAnime);

        console.log(`Inserted: ${transformedAnime.title}`);
        const characterResponse = await fetch(
    `https://api.jikan.moe/v4/anime/${transformedAnime.external_id}/characters`
        );

        if (!characterResponse.ok) {
            console.log(`Failed to fetch characters for ${transformedAnime.title} (${characterResponse.status})`);
            continue;
        }

        const characterResult = await characterResponse.json();

        for (const rawCharacter of characterResult.data) {

            const validatedCharacter = ValidateCharacters(rawCharacter);

            if (!validatedCharacter.isValid) {
                console.log(validatedCharacter.errors);
                continue;
            }

            const transformedCharacter = characterTransform(
                validatedCharacter.data,
                insertedAnime.id
            );

            await insertCharacter(transformedCharacter);
        }

            console.log(`Characters synced: ${transformedAnime.title}`);
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            }
       }

       
            console.log("sync completed, data is transformed")
            }
        

syncAnime()

