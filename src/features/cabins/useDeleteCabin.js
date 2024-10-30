import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import deleteCabin from "../../services/apiCabines";

export function useDeleteCabin() {
 
const queryClient=useQueryClient();
  const{isLoading:isDeleting, mutate:deleteCabinMutate}=useMutation({
    mutationFn:(id)=>deleteCabin(id),
    onSuccess:()=>{
      toast.success("we delete succesfully");
      queryClient.invalidateQueries({
        queryKey:['cabins']
      })
    },
    onError:(err)=>{
      toast.error('There was an error while deleting')
      console.log(err)
    }
   
  })
  return {isDeleting, deleteCabinMutate};
}