import ValidateCharacters from "./validator/characterValidations.js";
import characterTransform from "./transformations/characterTransformation.js";
import insertCharacter from "./repository/characterRepository.js";

const res = await fetch("https://api.jikan.moe/v4/anime/20/characters");
const data = await res.json();

const anime_id = '7fd45497-3323-4988-b6fa-e3599a293e58';

for (const character of data.data) {

    const result = ValidateCharacters(character);

    if (!result.isValid) {
        console.log(result.errors);
        continue;
    }

    const transformedData = characterTransform(result.data, anime_id);

    console.log(transformedData);

    
     await insertCharacter(transformedData);
}