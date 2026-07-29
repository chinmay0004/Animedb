import pool from "../db/animedb.js"

export default async function insertAnime(anime){
    const query= `
    INSERT INTO anime (external_id, title, description, episodes, status, aired_from, aired_to, image_url)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    ON CONFLICT(external_id) DO NOTHING;
    `
    const values = [
        anime.external_id,
        anime.title,
        anime.description,
        anime.episodes,
        anime.status,
        anime.aired_from,
        anime.aired_to,
        anime.image_url
    ];

    await pool.query(query, values);
}