import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditingSeeting(){
  const queryClient = useQueryClient();

const {mutate:updateSeting, isLoading:isEaditingSeting}=useMutation({
    mutationFn:updateSetting,//===mutationFn:createCabin,
    onSuccess:()=>{
      toast.success(" seting successfully edited");
      queryClient.invalidateQueries({
        queryKey:["settings"]
      })
    // reset();
    },
    onError:()=>{
      toast.error("Seting could not be edited")},
  })
  return {updateSeting, isEaditingSeting};

}