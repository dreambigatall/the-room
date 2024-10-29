import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabines";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";






function CreateCabinForm({cabinToEdit = {}}) {
  const {id:editId, ...editValue} =cabinToEdit;
  const isEditSession = Boolean(editId)

  const {register, handleSubmit, reset,getValues, formState}=useForm({
    defaultValues:isEditSession?editValue:{}
  });
 const {errors} = formState;
 console.log(errors);
    const queryClient = useQueryClient();
  const {mutate:creatingCabin, isLoading:isCreating}=useMutation({
    mutationFn:(newCabin)=>createEditCabin(newCabin),//===mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey:["cabins"]
      })
     reset();
    },
    onError:()=>{
      toast.error("Cabin could not be created")},
  })

  const {mutate:editingCabin, isLoading:isEaditing}=useMutation({
    mutationFn:({newCabin,id})=>createEditCabin(newCabin,id),//===mutationFn:createCabin,
    onSuccess:()=>{
      toast.success(" cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey:["cabins"]
      })
     reset();
    },
    onError:()=>{
      toast.error("Cabin could not be edited")},
  })
  function onSubmit(data){
    const image = typeof data.image ==='string'?data.image:data.image[0]
    if(isEditSession) return editingCabin({newCabin:{...data,image}, id:editId})
    creatingCabin({
      ...data,
      image:image
    });
  }
  const isWorking = isCreating || isEaditing
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message} disabled={isWorking}>
        
        <Input type="text" id="name" {...register("name", {required:"this filed is required"})} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message} disabled={isWorking}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity", {required:"this filed is required",
          min:{
            value:1,
            message:"Capacity should be atleast 1"
          }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message} disabled={isWorking}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {required:"this filed is required",
          min:{
            value:1,
            message:"Capacity should be atleast 1"
          }})} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message} disabled={isWorking}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {required:"this filed is required",
          validate:(value)=>{
              return value<=getValues().regularPrice || "Discount should be less than regular price"
             
            
          }
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message} disabled={isWorking}>
        <Textarea disabled={isWorking} type="number" id="description" defaultValue=""  {...register("description", {required:"this filed is required"})} /> 
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message} >
        <FileInput id="image" accept="image/*" {...register('image',{
          required:isEditSession? false : "this filed is required"
        })}
 />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking} >{isEditSession?"Edit cabin":"Add cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
