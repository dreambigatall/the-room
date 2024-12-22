import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate, getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStayes(){
    const [searchParams] = useSearchParams();
    console.log('x', searchParams.get('last'))
    const numDay=!searchParams.get('last')? 7 :Number(searchParams.get('last'))

    const queryDate = subDays(new Date(), numDay).toISOString();

    const {isLoading, data:stays } = useQuery({
        queryFn:()=>getStaysAfterDate(queryDate),
        queryKey:['stays', `last-${numDay}`]
    })
    const confirmedStay=stays?.filter(stay=>stay.status === 'checked-in' ||stay.status==='checked-out'                   )
   return {isLoading, stays, confirmedStay}
}