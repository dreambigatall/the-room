import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings(){
    const [searchParams] = useSearchParams();
    console.log('x', searchParams.get('last'))
    const numDay=!searchParams.get('last')? 7 :Number(searchParams.get('last'))

    const queryDate = subDays(new Date(), numDay).toISOString();

    const {isLoading, data:bookings } = useQuery({
        queryFn:()=>getBookingsAfterDate(queryDate),
        queryKey:['bookings', `last-${numDay}`]
    })

   return {isLoading, bookings, numDay}
}