import ValidateCharacters from "./validator/characterValidations.js";

const res = await fetch("https://api.jikan.moe/v4/anime/20/characters");
const data = await res.json()


for(const character of data.data){
    const result = ValidateCharacters(character);

    console.log(result)
    
}



