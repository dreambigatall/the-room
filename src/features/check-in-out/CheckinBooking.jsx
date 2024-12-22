import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox"
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useChekin";
//import {useSettings} from "../settings/useSetting"
import { useSetting } from "../settings/useSetting";


const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const {data, isLoading} = useBooking()
  const [confirmePaid, setConfirmePaid] = useState(false);
  const [addBreakFast, setAddBreakFast] = useState(false)
  const {checkin, isCheckingIn} = useCheckin()
  const {setings, isLoading:LoadingforSetting} = useSetting();
  console.log(setings)
  useEffect(()=>(
    setConfirmePaid(data?.isPaid??false)
    
  ), [data])
  const moveBack = useMoveBack();
  
  if(isLoading || LoadingforSetting) <Spinner/>

  if(!data) {
    return <Spinner/>
  }
  const {
    id: bookingId,
    guest,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    
  } = data;
  const optionalBreakfastPrice = setings.breakFastPrice * numNights * numGuests || 0

  function handleCheckin() {
   if(!confirmePaid) return
   console.log(bookingId)
   checkin(bookingId)

  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={data} />
     {
      (hasBreakfast) && <Box>
        <Checkbox checked={addBreakFast} onChange={()=>{setAddBreakFast(breakFast=>!breakFast)
        setConfirmePaid(false) 

        }} id='breakfast'>
         Want to Add breakfast for {optionalBreakfastPrice}?
        </Checkbox>
      </Box>
}
      <Box>
        <Checkbox checked={confirmePaid} onChange={()=>setConfirmePaid(confirm=>!confirm)} id="confirm" disabled={confirmePaid || isCheckingIn}>
          I confirme that {guest.fullName} has paid the total amount of {!addBreakFast ? formatCurrency(totalPrice) : formatCurrency(totalPrice + optionalBreakfastPrice)} 
        </Checkbox>
      </Box>
      <ButtonGroup>
         <Button onClick={handleCheckin} disabled={!confirmePaid || isCheckingIn}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
