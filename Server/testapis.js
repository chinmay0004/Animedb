const res = await fetch("https://api.jikan.moe/v4/top/anime");
const data = await res.json()



console.log(data)
