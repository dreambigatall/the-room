import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../services/apiSettings"

export function useSetting(){
    const {data:setings, isLoading, error}=useQuery({
        queryKey:['settings'],
        queryFn:getSettings
    })
    return {setings, isLoading, error}
}