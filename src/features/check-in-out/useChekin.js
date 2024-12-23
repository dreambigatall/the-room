// import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateBooking } from "../../services/apiBookings";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export function useChekin(){
//     const queryClient = useQueryClient()
//     const navigate = useNavigate()
//     const{mutate:checkin, isLoading:isCheckingin}=useMutation({
//         mutationFn:(bookingId)=>updateBooking(bookingId,{
//             status:'checked-in',
//             isPaid:true
//         }),
//         onSuccess:(data)=>{
//             toast.success(`Booking #${data.id} succesfuli chekedIn`);
//             queryClient.invalidateQueries({active:true});
//             navigate('/')
//         },

//         onError:()=>toast.error("ther is an error")
//     });
//     return {checkin,isCheckingin}
// }

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId }) =>
       

      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries(["bookings"]);
      navigate("/");
    },

    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}