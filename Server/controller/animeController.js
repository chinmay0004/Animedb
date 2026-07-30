import {findAnimeById, getAllAnimeFromDb, findAnimeAiring} from "../repository/queryRepository.js";


export async function getAllAnime(req, res) {
    const anime = await getAllAnimeFromDb();

    res.json(anime)
}

export async function getAnimeById(req, res) {
    const {id} = req.params;

    const anime = await findAnimeById(id);

    res.json(anime);
}

export async function AiringAnime(req, res) {
    const anime = await findAnimeAiring();

    res.json(anime);
};

