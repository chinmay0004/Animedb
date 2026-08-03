import { findCharacterById } from "../repository/queryRepository.js";

export async function getCharacters(req, res) {
    const {id} = req.params;

    const characters = await findCharacterById(id);

    res.json(characters)
    
}