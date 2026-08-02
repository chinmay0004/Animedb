import pool from "../db/animedb.js";

export default async function insertCharacter(character){
    const query = `
    INSERT INTO characters (external_id, anime_id, name, image_url, role)
    VALUES($1, $2, $3, $4, $5)
    ON CONFLICT (external_id)
    DO UPDATE SET
    anime_id = EXCLUDED.anime_id,
    name = EXCLUDED.name,
    image_url = EXCLUDED.image_url,
    role = EXCLUDED.role,
    updated_at = NOW();
    `

    const characterValues = [
        character.external_id,
        character.anime_id,
        character.name,
        character.image_url,
        character.role
    ];

    await pool.query(query, characterValues);

};

