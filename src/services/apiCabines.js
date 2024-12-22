import supabase, { supabaseUrl } from "./supabase";

export async function getCabines(){

    
const  { data, error } = await supabase
.from('cabins')
.select('*')
if(error){
    console.error(error)
    throw new Error("Cabins could not be loaded")
}

return data;

}


async function deleteCabin(id){
    const {data, error} =await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    if(error){
        throw new Error("cabine not deleted")
    }
    return data;
}

export default deleteCabin;

export  async function createEditCabin(newCabin,id){
    console.log(newCabin,id)
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
    //1, create cabin
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath =hasImagePath?newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;
    let query =  supabase.from('cabins')
    //A, to create
  if(!id) {
    query=query.insert([{...newCabin,image:imagePath}])
}
    
  //B to edit
if(id){
   query= query.update({...newCabin,image:imagePath})
.eq('id', id)
.select()

}
    
    
const{data, error} = await query.select().single();

    if(error){
        throw new Error("Cabin could not be created")
    }

    //2 upload the image
    if(hasImagePath) return data;
    const { data:storedata, error:storerror } = await supabase
    .storage
    .updateBucket('cabin-image', {
      public: false,
      allowedMimeTypes: ['image/png'],
      fileSizeLimit: 1024
    })

    const {data:storageData, error:storageError}= await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

   //3 delete the cabin if there was an error uploading image
//    if(storageError){
//         await supabase.from('cabins').delete().eq('id', data.id)
//         throw new Error("Cabin image could not be uploaded and the cabin was not created")
//     }


    return data;
    


}