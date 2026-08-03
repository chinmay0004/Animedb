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

export async function paginations(limit, offset) {
    const result = await pool.query("SELECT * FROM anime LIMIT $1 OFFSET $2",
        [limit, offset]
    );

    const total = await pool.query("SELECT COUNT(*) FROM anime");

    return{
        anime: result.rows,
        total: Number(total.rows[0].count)
    };
};

export async function LatestAiring() {
    const result = await pool.query("SELECT * FROM anime ORDER BY aired_from DESC");

    return result.rows;
}

export async function getAllAnime() {
    const result = await pool.query('SELECT id, external_id, title FROM anime');

    return result.rows;
}