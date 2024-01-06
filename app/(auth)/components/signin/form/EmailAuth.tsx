'use client'
import { useState } from "react";
import CInput from "../../UI/CInput";
import FormBtn from "../../UI/FormBtn";
import FormInput from "../../UI/FormInput";
import Cookies from "js-cookie";
import FormLabel from "../../UI/FormLabel";
import userDataProps from "@/app/types/userType";
import axios from "axios";
import { useRouter } from "next/navigation";

const EmailAuth = () => {
  const [userData, setUserData] = useState<userDataProps>({
    userEmail: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const [handleError, setHandleError] = useState<string[]>([])
  const [errorRrequest, setErrorRequest] = useState(false)

  const router = useRouter()

  const handleChangeValue = (label: keyof userDataProps, value: string): void => {
    if(isLoading === true) return
    setUserData((prev) => {
      return { ...prev, [label]: value };
    });
  }

  const sendRecuest = () => {
    axios.post('api/sign-in-api', userData)
    .then(res => {
      console.log(res.data)
      Cookies.set('user_id__value', res.data._id) 
      Cookies.set('token__value', res.data.token) 
      router.push('/')
    })
    .catch(error => {
      setErrorRequest(true)
      setIsLoading(false)
    })
  }

  const validationValue = (callback: () => void): void => {
    setHandleError(prev => [])
    setErrorRequest(false)
    const arrOfErrors: string[] = []
    if(userData.userEmail.length < 4){
      arrOfErrors.push('userEmail')
    }
    if(userData.password.length < 3){
      arrOfErrors.push('password')
    }

    if(arrOfErrors.length === 0){
      setIsLoading(true)
      callback()
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
    }else{
      setHandleError(arrOfErrors)
    }
  }
  return (  
    <div className="flex flex-col gap-4">
      <CInput>
        <FormLabel title="Email"/>
        <FormInput  
          changeValue={handleChangeValue}
          inputLabel="userEmail"
          error={handleError.indexOf('userEmail') !== -1 } 
          formType="text"
          isLoading={isLoading}
        />
      </CInput>

      <CInput>
        <FormLabel title="Password"/>
        <FormInput 
          changeValue={handleChangeValue}
          error={handleError.indexOf('password') !== -1 } 
          inputLabel="password"
          formType="password"
          isLoading={isLoading} 
        />
      </CInput>
      <div className={`${errorRrequest ? 'block' : 'hidden'} text-red-400 `}>
        Something went wrong. Please try again
      </div>
      <FormBtn 
        title="LogIn"
        isLoading={isLoading}
        isClick={() => validationValue(sendRecuest)}
      />

    </div>
  );
}
 
export default EmailAuth;