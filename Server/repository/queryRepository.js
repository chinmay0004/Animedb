import { id } from "zod/v4/locales";
import pool from "../db/animedb.js";

export async function getAllAnimeFromDb() {
    const result = await pool.query("SELECT * FROM anime");

    return result.rows;
}

export async function findAnimeById(id) {
    const result = await pool.query("SELECT * FROM anime WHERE id = $1",
        [id]
    );

    return result.rows;
}

export async function findAnimeAiring() {
    const result = await pool.query("SELECT * FROM anime WHERE status = 'Currently Airing'");

    return result.rows;
}

export async function findFinishedAnime() {
    const result = await pool.query("SELECT * FROM anime WHERE status = 'Finished Airing'");

    return result.rows;
}

export async function findAnimeByTitle(query) {
    const result = await pool.query("SELECT * FROM anime WHERE title ILIKE $1",
        [`%${query}%`]
    );

    return result.rows;
}