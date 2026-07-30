
import {findAnimeById, getAllAnimeFromDb, findAnimeAiring, findFinishedAnime, findAnimeByTitle} from "../repository/queryRepository.js";


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

export async function FinishedAnimes(req, res) {
    const anime = await findFinishedAnime();

    res.json(anime);
};

export async function SearchAnime(req, res) {
    const {q} = req.query;

    const anime = await findAnimeByTitle(q);

    res.json(anime);
}


