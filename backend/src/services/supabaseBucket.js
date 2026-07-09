// import { supabase } from "../database/supbase.storage./";

// export const uploadProject = async (file) => {

//     const fileName = `projects/${Date.now()}-${file.originalname}`;

//     const { data, error } = await supabase.storage
//         .from("portfolio")
//         .upload(fileName, file.buffer, {
//             contentType: file.mimetype,
//         });

//     if (error) {
//         return error;
//     }

//     const {
//         data: { publicUrl },
//     } = supabase.storage
//         .from("portfolio")
//         .getPublicUrl(fileName);

//     return {
//         upload: data,
//         publicUrl,
//     };
// }