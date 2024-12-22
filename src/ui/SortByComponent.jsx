
import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'
export default function SortByComponent({options}) {
     const [serchParams, setSearchParams] = useSearchParams();
     const sortBy = serchParams.get('sortBy') || '';


    function handelChange(e){
       serchParams.set('sortBy', e.target.value);
       setSearchParams(serchParams);
    }
  return (
     <Select options={options} type="white" value={sortBy} onChange={handelChange}
     />
  )
}
