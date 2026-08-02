export default function characterTransform(data, anime_id){
    const {
        character: {
            mal_id,
            name,
            images: {
                jpg: {
                    image_url
                }
            }
        },
        role
    } = data;

    return {
        external_id: mal_id,
        anime_id,
        name,
        image_url,
        role
    };
}

   

    
