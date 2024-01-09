'use client'

import { useState } from "react";

interface CategoryItemProps{
  title: string,
  selectedCategory: string,
  isClickeed: (value: string) => void
}
const CategoryItem:React.FC<CategoryItemProps> = ({
  title,
  selectedCategory,
  isClickeed
}) => {
  if(title === ''){
    return
  }
  return (  
    <div 
      className={`${selectedCategory === title ? 'border-violet-400' : 'border-gray-400'} border-2 rounded-lg h-[40px] px-3 py-2 bg-inherit`}
      onClick={() => isClickeed(title)}
    >
      {title}
    </div>
  );
}
 
export default CategoryItem;