'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AddCategory from "./AddCategory";
import CategoryItem from "./CategoryItem";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppSelector } from "@/app/redux/store";

interface CategoryMenuProps{
  categoryValue: string, 
  changeCategory: (label: 'todoText' | 'todoPriority' | 'todoCategory' , value: string) => void
}
const CategoryMenu:React.FC<CategoryMenuProps> = ({
    categoryValue,
    changeCategory
  }) => {
  const [isOpen, setIsOpen] = useState(false)

  const categorysList = useAppSelector(store => store.TodoTasks.category)
  const handleChangeCategory = (value: string) => {
    changeCategory('todoCategory', value)
  }
  return (  
    <div className="flex flex-col gap-5">

    <div className="flex gap-6 items-center">
      <div 
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2 text-2xl font-semibold"
      >
        Category 
        {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
      </div>

      <div className={`${categoryValue !== '' ? 'block text-green-400/60' : 'hidden'}`}>Selected</div>
    </div>

    <div className={`${isOpen ? 'h-[120px]' : 'h-0 overflow-hidden invisible'} transition-all flex flex-col gap-4`}>
      <div className="flex flex-wrap gap-3 overflow-hidden overflow-y-scroll max-h-[100px]">
        <AddCategory changeValue={handleChangeCategory} selectedCategory={categoryValue}/>

        {categorysList.map(item => (
          <CategoryItem 
            key={`${item}__category`}
            title={item} 
            selectedCategory={categoryValue}
            isClickeed={handleChangeCategory}
          />
        ))}
      </div>
      {categoryValue.length > 0 && (
        <div 
          onClick={() => changeCategory('todoCategory', '')}
          className="cursor-pointer hover:opacity-60 transition-opacity flex items-center gap-2 text-red-400"
        >
          <AiOutlineDelete /> Delete Category
        </div>
      )}
    </div>
  </div>
  );
}
 
export default CategoryMenu;