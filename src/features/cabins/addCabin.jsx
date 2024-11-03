import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {

    return(
        <div>
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button>Add new cabin   </Button>
            </Modal.Open>
            <Modal.Window name="cabin-form" >
                <CreateCabinForm/>
            </Modal.Window>

              
        </Modal>
        </div>
    )
}
export default AddCabin;













// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//         <button onClick={()=>setIsOpenModal((modal)=>!modal)}>
//             Add new cabin</button>
//             {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}><CreateCabinForm onClose={()=>setIsOpenModal(false)}/></Modal>}
//     </div>
//   );
// }

// export default AddCabin;
