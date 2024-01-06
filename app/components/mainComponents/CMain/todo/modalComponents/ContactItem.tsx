'use client'

import { useState } from "react";

interface ContactItemProps{
  label: string
}
const ContactItem:React.FC<ContactItemProps> = ({
  label
}) => {
  const [isActive, setIsActive] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return ( 
    <div className="">
      <input type="text" className="border"/>
    </div>
  )
}
 
export default ContactItem;