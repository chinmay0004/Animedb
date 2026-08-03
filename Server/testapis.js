import ValidateCharacters from "./validator/characterValidations.js";
import characterTransform from "./transformations/characterTransformation.js";
import insertCharacter from "./repository/characterRepository.js";
import { getAllAnime } from "./repository/queryRepository.js";







const animeList = await getAllAnime();

for (const anime of animeList){
    const url = `https://api.jikan.moe/v4/anime/${anime.external_id}/characters`;

    let res = await fetch(url);

    if (res.status === 504) {
        console.log(`Retrying ${anime.title}...`);

        await new Promise(resolve => setTimeout(resolve, 5000));

        res = await fetch(url);
    }
    

    if (!res.ok) {
    console.log(`Failed: ${anime.title} (${res.status})`);

    await new Promise(resolve => setTimeout(resolve, 5000));

    continue;
}
   const data = await res.json();

    for(const rawCharacter of data.data){
        const validatedCharacter = ValidateCharacters(rawCharacter)

        if (!validatedCharacter.isValid) {
                console.log(validatedCharacter.errors);
                continue;
         }

         const transformedCharacter = characterTransform(
                         validatedCharacter.data,
                         anime.id
                     );
        await insertCharacter(transformedCharacter);


    }

    
    console.log(`Characters synced: ${anime.title}`);

    await new Promise(resolve => setTimeout(resolve, 4000))
    
}