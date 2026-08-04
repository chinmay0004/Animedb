export async function getAllAnime() {
    const response = await fetch('http://localhost:3000/api/anime');

    if(!response.ok){
        console.log("Fail to fetch data form backend")
    }

    return response.json();
}

export async function  getPaginatedAnimes(page, limit) {
    const response = await fetch(`http://localhost:3000/api/anime/pages?page=${page}&limit=${limit}`);

    if(!response.ok){
        console.log('fail to load pages')
    }

    return await response.json();
}

export async function getAnimeById(id) {
    const response = await fetch(`http://localhost:3000/api/anime/${id}`);

    if(!response.ok){
        console.log('fail to get id')
    }

    return await response.json();
}

export async function getCharacters(id) {
    const response = await fetch(`http://localhost:3000/api/anime/${id}/characters`);

    if(!response.ok){
        console.log('fail to characters')
    }

    return await response.json();
}