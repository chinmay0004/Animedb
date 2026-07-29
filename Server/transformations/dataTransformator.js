export default function transformData(data){
   const {
    mal_id: external_id,
    title: title,
    synopsis: description,
    episodes: episodes,
    status: status,
    aired:{
        from: aired_from,
        to: aired_to
    },
    images:{
        jpg:{
            large_image_url: image_url
        }
    }
   } = data

   const transform ={
    external_id,
    title,
    description,
    episodes,
    status,
    aired_from,
    aired_to,
    image_url
   }

   return transform;
}