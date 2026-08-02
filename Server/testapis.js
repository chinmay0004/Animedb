import ValidateCharacters from "./validator/characterValidations.js";
import characterTransform from "./transformations/characterTransformation.js";

const res = await fetch("https://api.jikan.moe/v4/anime/20/characters");
const data = await res.json()


const anime_id = 1
for(const character of data.data){
    const result = ValidateCharacters(character);


    const transformedData = characterTransform(result.data, anime_id )

    console.log(transformedData)
    
}





