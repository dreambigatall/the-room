import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../../services/supabase";

export function useLogin(){
    const queryClient =useQueryClient();
    const navigate = useNavigate();
    const {mutate:login, isLoading}=useMutation({
        mutationFn:({email,password})=>loginApi({email,password}),
        onSuccess: (user) =>{
        queryClient.setQueryData(['user'],user.user)
        navigate("/dashboard", {replace:true})
        },
        onError:err=>{
            console.log('ERROR', err)
            toast.error("provided email or password are inncorect")
        }

    })
    return {login,isLoading}
}

