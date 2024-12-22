import React from 'react'
import Stat from "./Stat"
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
export default function Stats({bookings, confirmedStays, numDays, cabinCount}) {

    //1, number of bookings

    const numberOfBookings=bookings.length;

    //2, 
    const sales = bookings.reduce((acc, cur)=>acc + cur.totalPrice,0)

    //3
    const checkins=confirmedStays.length;

    //4

    const occupation=confirmedStays.reduce((acc,cur)=>acc + cur.numNights, 0)/(numDays * cabinCount)
    //num checked in night / all avilabel night (numofdayse * numofcabines)

  return (

    <>
    <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase/>} value={numberOfBookings}/>
    <Stat title='Sales' color='green' icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)}/>
    <Stat title='Check ins' color='indigo' icon={<HiOutlineCalendarDays/>} value={checkins}/>
    <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar/>} value={Math.round(occupation*100) + "%"}/>

    
    </>
  )
}
