import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import ContactItem from "./ContactItem";

const AddContact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return ( 
    <div className="flex flex-col gap-5">

      <div className="flex gap-6 items-center">
        <div 
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          Add Contacts 
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </div>

      </div>

      <div className={`${isOpen ? 'h-[80px]' : 'h-0 overflow-hidden invisible'} transition-all flex flex-col gap-x-4 gap-y-3`}>
        <ContactItem
          label="phone"
        />
      </div>
    </div>
  );
}
 
export default AddContact;