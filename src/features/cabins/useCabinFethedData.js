import { useQuery } from "@tanstack/react-query";
import { getCabines } from "../../services/apiCabines";

export function useCabinFethedData(){
    const {data, isLoading}=useQuery({
        queryKey:['cabins'],
        queryFn:getCabines
       })

       return {data, isLoading};
}