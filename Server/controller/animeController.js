
import {findAnimeById, getAllAnimeFromDb, findAnimeAiring, findFinishedAnime, findAnimeByTitle, paginations, LatestAiring} from "../repository/queryRepository.js";


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

export async function Paginations(req, res) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const offset = (page - 1) * limit;

    const {anime, total} = await paginations(limit, offset)
   

    res.json({
        data: anime,
        pagination:{
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    });
}

export async function LatestAnime(req, res) {
    const anime = await LatestAiring();

    res.json(anime);
};



