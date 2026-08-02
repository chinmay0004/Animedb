import z from 'zod';

export default function ValidateCharacters(data){
    const CHvalidator = z.object({
        character: z.object({
            mal_id: z.number(),
            name: z.string(),

            images: z.object({
                jpg: z.object({
                    image_url: z.string().url().nullable()
                })
            })
        }),
        role: z.string()
    })

    const result = CHvalidator.safeParse(data)

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