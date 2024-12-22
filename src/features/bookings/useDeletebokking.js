import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
//import deleteCabin from "../../services/apiCabines";
import {deleteBooking} from '../../services/apiBookings'
export function useDeleteBooking() {
 
const queryClient=useQueryClient();
  const{isLoading:isDeleting, mutate:deleteBookingMutate}=useMutation({
    mutationFn:(id)=>deleteBooking(id),
    onSuccess:()=>{
      toast.success("we delete succesfully");
      queryClient.invalidateQueries({
        queryKey:['bookings']
      })
    },
    onError:(err)=>{
      toast.error('There was an error while deleting')
      console.log(err)
    }
   
  })
  return {isDeleting, deleteBookingMutate};
}