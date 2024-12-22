import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner"

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeletebokking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {data, isLoading, error} = useBooking();
  const  {isDeleting, deleteBookingMutate}  = useDeleteBooking()
  
 // const status = "checked-in";
 const navigate = useNavigate();
console.log(data)
  const moveBack = useMoveBack();
  if(isLoading) return <Spinner/>
  console.log(data)

 const {status, id} = data;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={data} />

      <ButtonGroup>
      {(status==='unconfirmed') &&
          <Button  onClick={()=>navigate(`/checkin/${bookingId}`)}>
             Cheked in
          </Button>
} 
       <Modal>
        <Modal.Open opens='delete'>
          <Button variation='danger'>Delete Booking</Button>
        </Modal.Open>
       <Modal.Window name='delete'>
        <ConfirmDelete resourceName='booking' onConfirm={()=>deleteBookingMutate(id, {
          onSettled:()=>navigate(-1)
        })} disabled={isDeleting}/>
      </Modal.Window>
       </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
