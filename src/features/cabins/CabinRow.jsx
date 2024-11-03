import styled from "styled-components";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


function CabinRow({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const [showForm, setShowForm] = useState(false);
   const {isDeleting, deleteCabinMutate}=useDeleteCabin();
   const {isCreating,creatingCabin} = useCreateCabin();

   function handelDuplicateCabin(){
    creatingCabin({
      name:`Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    
      
    })
   }
  return(
    <>
    <Table.Row>
       <Img src={image} />
       <Cabin>{name}</Cabin>
       <div>{maxCapacity}</div>
       <Price>{regularPrice}</Price>
       {discount ? <Discount>{discount}</Discount>: <span>&mdash;</span>}
       <div>
       <button onClick={handelDuplicateCabin}><HiSquare2Stack/></button>
       <Modal>
        <Modal.Open opens="edit">
        <button onClick={()=>setShowForm((show)=>!show)}><HiPencil/></button>
        </Modal.Open>
        <Modal.Window name="edit">
         <CreateCabinForm cabinToEdit={cabin}/>

        </Modal.Window>
        <Modal.Open opens="delete">
        <button ><HiTrash/></button>

        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
          disabled={isDeleting}
          resourceName="cabin"
          onConfirm={()=>deleteCabinMutate(id)}

          />
        </Modal.Window>
       </Modal>
        
       </div>
       

      </Table.Row>
      
      </>
  )
}

export default CabinRow;