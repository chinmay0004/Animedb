import z from "zod";


export default function validateData(data){
    const validator = z.object({
        mal_id: z.number({
            required_error: "mal_id is missing from Jikan response.",
            invalid: "External mal_id mus be number and valid.",
        }),

        title: z.string({
            required_error: "validation fail: 'title' is required"
        }).trim().min(1),
        episodes: z.number().int().nonnegative().nullable(),

        status: z.enum(["Finished Airing", "Not Yet Aired", "Currently Airing"]),
        
        images: z.object({
            jpg: z.object({
            image_url: z.string().url(),
            small_image_url: z.string().url(),
            large_image_url: z.string().url()
            }) 
        }),

        synopsis: z.string().trim(),

        aired: z.object({
            from: z.string().nullable(),
            to: z.string().nullable()
        })

    })
    const result = validator.safeParse(data);

    if(!result.success){
        return{
             isValid: false,
             errors: result.error.flatten().fieldErrors
        } 
    }
    return{
        isValid: true,
        data: result.data
    }
}