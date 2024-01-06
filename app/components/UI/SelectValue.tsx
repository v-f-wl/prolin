'use client'
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

interface SelectValueProps{
  label?: string,
  placeholder?: string,
  dataList?: { value: string; label: string; flag: string; latlng: [number, number]; region: string; }[],
}

const SelectValue:React.FC<SelectValueProps> = ({
  label,
  placeholder,
  dataList,
}) => {

  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [selectedValue, setSelectedValue] = useState('')
  const [filterSearch, setFilterSearch] = useState('')
  const selectCountry = (labelOfCountry: string) => {
    setSelectedValue(prev => labelOfCountry)
    setModalIsOpen(false)
  }

  const filteredData = dataList !== undefined && dataList.filter((item) => item.label.toLowerCase().includes(filterSearch.toLowerCase()));


  return ( 
    <div className="relative flex flex-col gap-1 w-full max-w-[210px]">
      <div className="">Countrie</div>
      <div 
        onClick={() => setModalIsOpen(prev => !prev)}
        className="relative border py-2 px-3 rounded-xl pr-4 border-neutral-600"
      >
        {
          selectedValue !== '' ? 
          (
            <div className="">{selectedValue}</div>
          ) : (
            <div className="text-neutral-400">Не выбранно</div>
          )
        }
        <IoIosArrowDown 
          className="absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
      <div 
        className={`
          ${modalIsOpen ? 'h-[150px] overflow-y-scroll' : 'h-0 overflow-hidden invisible'} 
          p-2 
          rounded-xl 
          w-full 
          transition-all 
          border
          absolute top-[80px] border-neutral-500
        `}
      >
        <div className="border-b border-neutral-500 flex items-center gap-2 justify-between">
          <input 
            type="text" 
            className="bg-inherit outline-none" 
            placeholder="Search"
            onChange={(event) => setFilterSearch(prev => prev + event.target.value)}
          />
          <div className="cursor-pointer hover:opacity-50 transition-opacity">
            <IoMdClose />
          </div>
        </div>
      {dataList !== undefined && dataList
        .filter(item => {
          return item.label.toLowerCase().includes(filterSearch.toLowerCase())
        })
        .map((item, index) => (
          <div 
            key={`${index}__${item.label}`}
            onClick={() => selectCountry(item.label)}
            className=""
          >
            {item.flag}{item.label}
          </div>
        ))}
      </div>

    </div>
  )
}
 
export default SelectValue;