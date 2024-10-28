import supabase from "./supabase";

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

export  async function createCabin(newCabin){
    const {data, error} = await supabase
    .from('cabins')
    .insert([
        newCabin
    ])
    if(error){
        throw new Error("Cabin could not be created")
    }
    return data;
    


}