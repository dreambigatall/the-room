import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTabel from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/addCabin";
function Cabins() {

 
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>

    <Row>
      <CabinTabel/>
      <AddCabin/>
    </Row>
    </>
  );
}

export default Cabins;
