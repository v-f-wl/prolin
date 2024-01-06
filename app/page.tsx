'use client'
import { useEffect, useState } from "react";
import LeftMenu from "./components/LeftMenu";
import TodoModal from "./components/mainComponents/CMain/todo/TodoModal";
import RatingModal from "./components/mainComponents/CMain/ratingModal/RatingModal"
import Cookies from "js-cookie";
import CentalMain from "./components/mainComponents/CentalMain";
import TopMain from "./components/mainComponents/TopMain";
import CNotification from "./components/notification/CNotification";
import FlexCenter from "./components/UI/FlexCenter";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function Home() {
  const [checkedToken, setCheckedToken] = useState(true)

  const userId = Cookies.get('user_id__value') !== undefined
  const userToken = Cookies.get('token__value') !== undefined
  
  const userIdValue = Cookies.get('user_id__value')
  const userTokenValue = Cookies.get('token__value')

  const router = useRouter()

  useEffect(() => {

    if(userId && userToken){
      if(userIdValue !== undefined && userTokenValue !== undefined){
        axios.post('/api', {
          userId: userIdValue,
          token: userTokenValue
        })
        .then(res => {
          setCheckedToken(false)
          console.log(res.data)
        })
        .catch(error => registerRout())
      }
    }else{
      registerRout()
      // отправляем на страницу авторизации
    }
  },[userId, userToken])

  function registerRout() {
    router.push('/sign-in')
  }
  if(!!checkedToken){
    return (
      <FlexCenter className="w-screen h-screen bg-white dark:bg-neutral-800">
        
        <FlexCenter className="bg-neutral-200 dark:bg-neutral-700 w-[310px] py-[42px] rounded flex-col gap-4">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="text-2xl font-semibold">
            Token verification
          </div>
        </FlexCenter>
      </FlexCenter>
    )
  }
  return (
    <div className="">
        <LeftMenu/>
        <main className=" relative">
          <TopMain/>
          <CentalMain/>
        </main>
        <CNotification/>
        <TodoModal/>
        <RatingModal/>
    </div>
  )
}
