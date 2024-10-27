import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabines } from "../services/apiCabines";
import CabinTabel from "../features/cabins/CabinTable";

function Cabins() {
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
    </Row>
    </>
  );
}

export default Cabins;
