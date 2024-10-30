import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabines";

export function useCreateCabin(){

const queryClient = useQueryClient();
  const {mutate:creatingCabin, isLoading:isCreating}=useMutation({
    mutationFn:(newCabin)=>createEditCabin(newCabin),//===mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey:["cabins"]
      })
     //reset();
    },
    onError:()=>{
      toast.error("Cabin could not be created")},
  })

  return {creatingCabin, isCreating};
}