'use client'
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const AddCategory = ({changeValue, selectedCategory}: {changeValue: (value: string) => void, selectedCategory: string}) => {
  const [added, setWasAdded] = useState(false)
  const [categoryTitle, setCategoryTitle] = useState('')

  useEffect(() => {
    if(selectedCategory !== categoryTitle){
      setWasAdded(false)
    }
  }, [selectedCategory])
  const handleChangeValue = (value: string) => {
    if(added){
      setWasAdded(false)
      changeValue('')
    }
    setCategoryTitle(() => value)
  }

  const saveCategoryValue = () => {
    if(categoryTitle.length === 0){
      return
    }
    setWasAdded(true)
    changeValue(categoryTitle)
  }
  return ( 
    <div 
      className={`
        ${added ? 'border-violet-400' : 'border-gray-400'}
        flex 
        items-center 
        gap-1 
        border-2
        rounded-lg
      `}
    >
        <input 
          type="text"  
          maxLength={25} 
          onChange={(event) => handleChangeValue(event.target.value)}
          className="h-[40px] px-3 py-2 bg-inherit outline-none" 
          placeholder="New Category"
        />
        <div 
          onClick={saveCategoryValue}
          className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-green-600"
        >
            <IoAdd size={24}
        /></div>
      </div>
  );
}
 
export default AddCategory;