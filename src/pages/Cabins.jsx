import { useEffect,useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabines } from "../services/apiCabines";
import CabinTabel from "../features/cabins/CabinTable";
import Form from "../ui/Form";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  useEffect(function(){
    getCabines().then(data=>console.log(data))
  },[])
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>

    <Row>
      <CabinTabel/>
      <button onClick={()=>setShowForm((show)=>!show)}>Add new cabin</button>
      {showForm && <CreateCabinForm/>}
    </Row>
    </>
  );
}

export default Cabins;
