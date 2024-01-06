'use client'

import { useState } from "react";
import CommentItem from "./CommentItem";
import SelectItem from "./SelectItem";
import Buttons from "./Buttons";

interface ValueOfRatingType{
  [key: string]: number
}
const RatingValue = () => {
  const [valueOfRating, setValueOfRating] = useState<ValueOfRatingType>({
    сompleted: 0,
    efficiency: 0,
    learning: 0
  })

  const [commentValue, setCommentValue] = useState('')

  const handleChangeComment = (value: string) => {
    setCommentValue(prev => prev = value)
  }

  const handleChangeRange = (label: string, value: string) => {
    const count = Number(value)
    setValueOfRating((prev) => {
      return {...prev, [label]: count}
    })
  }

  const handleClearAll = () => {
    setValueOfRating((prev) => {
      const newObj = {...prev}

      for(const keyOfObj in newObj){
        newObj[keyOfObj] = 0
      }

      return newObj
    })
    setCommentValue('')
  }

  const handleSaveValue = () => {
    // функция отправки данных на сервер 
  }
  return ( 
    <div className="flex flex-col gap-7">
      <SelectItem 
        title="Percentage of Completed Tasks" 
        label="сompleted" valueOfRating={valueOfRating.сompleted} 
        changeValue={handleChangeRange}
      />
      <SelectItem 
        title="Work Efficiency" 
        label="efficiency" valueOfRating={valueOfRating.efficiency} 
        changeValue={handleChangeRange}
      />
      <SelectItem 
        title="Learning Achievement" 
        label="learning" valueOfRating={valueOfRating.learning} 
        changeValue={handleChangeRange}
      />
      <CommentItem 
        changeValue={handleChangeComment} 
        commentValue={commentValue}
      />
      <Buttons 
        clearValue={handleClearAll}
      />
    </div>
   );
}
 
export default RatingValue;