import styled from "styled-components";
import Spinner from "../../ui/Spinner"
import React from 'react'
import { useRecentBookings } from "./useRecentBoking";
import { useRecentStayes } from "./useRecentStayes";
import Stats from "./Stats";
import {useCabinFethedData} from "../cabins/useCabinFethedData"
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout() {
  const {bookings, isLoading, numDay} = useRecentBookings();
  const {stays,isLoading:isLoading1,confirmedStay} = useRecentStayes()
  const {data:cabins, isLoading:loding2} = useCabinFethedData();
  if(isLoading || isLoading1 || loding2) return <Spinner/>
    console.log(bookings)
    console.log(stays)
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStay} numDays={numDay} cabinCount={cabins.length}/>
      <TodayActivity/>
      <DurationChart confirmedStays={confirmedStay}/>
     <SalesChart bookings={bookings} numDays={numDay}/>
    </StyledDashboardLayout>
  )
}
