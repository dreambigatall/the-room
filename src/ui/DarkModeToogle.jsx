import React from 'react'
import ButtonIcon from "./ButtonIcon"
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModecontext'
export default function DarkModeToogle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
       {isDarkMode?<HiOutlineSun/>:<HiOutlineMoon/>}
    </ButtonIcon>
  )
}
