export async function getAllAnime() {
    const response = await fetch('http://localhost:3000/api/anime');

    if(!response.ok){
        console.log("Fail to fetch data form backend")
    }

    return response.json();
}