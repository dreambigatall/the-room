import { useMutation } from "@tanstack/react-query";
import { signup as signupapi} from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useSginup(){

    const {mutate:signup, isLoading} = useMutation({
        mutationFn:signupapi,
        onSuccess:(user)=>{
            console.log(user)
            toast.success("a new user created succesfully! please verify the new account from users email address")
        }
        

    })
   return {signup,isLoading}
}