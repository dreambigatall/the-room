import React from 'react'
//import TabeleOperation from "../../ui/TableOperations"
import TableOperations from '../../ui/TableOperations'
import Filter from "../../ui/Filter"
import SortByComponent from '../../ui/SortByComponent'
export default function CabinTabelOperation() {
  return (
    <TableOperations>
        <Filter filterFiled='discount' options={[
          {value: 'all', label:'All'},
          {value:'no-discount', label:"No-Discount"},
          {value:'with-discount', label:"With-Disount"}
        ]
        }/>
        <SortByComponent options={[
          {value:'name-asc', label:'Sort By Name (A-Z)'},
          {value:'name-des', label:'Sort By Name (Z-A)'},
          {value:'regularPrice-asc', label:'Sort By Price (low-first)'},
          {value:'regularPrice-des', label:'Sort By Price (higer-first)'},
          {value:'maxCapacity-asc', label:'Sort By maxCapacity (lower-first)'},
          {value:'maxCapacity-dec', label:'Sort By maxCapacity (high-first)'},
          

        ]}/> 
    </TableOperations>
  )
}
