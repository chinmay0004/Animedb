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

    return response.json();
}