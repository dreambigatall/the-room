import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabines";
import toast from "react-hot-toast";

export function useEditingCabin(){
  const queryClient = useQueryClient();

const {mutate:editingCabin, isLoading:isEaditing}=useMutation({
    mutationFn:({newCabin,id})=>createEditCabin(newCabin,id),//===mutationFn:createCabin,
    onSuccess:()=>{
      toast.success(" cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey:["cabins"]
      })
    // reset();
    },
    onError:()=>{
      toast.error("Cabin could not be edited")},
  })
  return {editingCabin, isEaditing};

}