'use client'
import CInput from "@/app/(auth)/components/UI/CInput";
import FormBtn from "@/app/(auth)/components/UI/FormBtn";
import FormInfo from "@/app/(auth)/components/UI/FormInfo";
import FormInput from "@/app/(auth)/components/UI/FormInput";
import FormLabel from "@/app/(auth)/components/UI/FormLabel";
import userDataProps from "@/app/types/userType";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
const MainForm = () => {

  const [userData, setUserData] = useState<userDataProps>({
    userEmail: '',
    firstName: '',
    secondName: '',
    password: '',
  })

  const [handleError, setHandleError] = useState<string[]>([])
  const [requestError, setRequestError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const router = useRouter()

  const handleChangeValue = (label: keyof userDataProps, value: string): void => {
    if(isLoading === true) return
    setUserData((prev) => {
      return { ...prev, [label]: value };
    });
  }
  
  const handleRequest = () => {
    axios.post('/api/sign-up-api', userData)
    .then((res) => {
      console.log(res.data._doc, res)
      Cookies.set('user_id__value', res.data._doc._id)
      Cookies.set('token__value', res.data.token)
      router.push('/')
    })
    .catch(error => {
      setIsLoading(false)
      setRequestError(true)
    })
  }

  const validationValue = (callback: () => void): void => {
    setHandleError(prev => [])
    const arrOfErrors: string[] = []
    if(userData.userEmail.length < 4){
      arrOfErrors.push('userEmail')
    }
    if(userData.firstName === undefined || userData.firstName.length < 3){
      arrOfErrors.push('firstName')
    }
    if(userData.secondName === undefined || userData.secondName.length < 3){
      arrOfErrors.push('secondName')
    }
    if(userData.password.length < 3){
      arrOfErrors.push('password')
    }

    if(arrOfErrors.length === 0){
      setIsLoading(true)
      callback()
    }else{
      setHandleError(arrOfErrors)
    }
  }

  return ( 
    <div className="flex flex-col gap-3">
      <CInput>
        <FormLabel title="Email"/>
        <FormInfo title="We recommend using a valid email "/>
        <FormInput 
          changeValue={handleChangeValue} 
          error={handleError.indexOf('userEmail') !== -1 } 
          inputLabel="userEmail" formType="text"
          isLoading={isLoading}
        />
      </CInput>
      <CInput>
        <FormLabel title="First Name"/>
        <FormInput 
          changeValue={handleChangeValue} 
          error={handleError.indexOf('firstName') !== -1 } 
          inputLabel="firstName" formType="text"
          isLoading={isLoading}
        />
      </CInput>
      <CInput>
        <FormLabel title="Last Name"/>
        <FormInput 
          changeValue={handleChangeValue} 
          error={handleError.indexOf('secondName') !== -1 } 
          inputLabel="secondName" formType="text"
          isLoading={isLoading}
        />
      </CInput>
      <CInput>
        <FormLabel title="Password"/>
        <FormInput 
          changeValue={handleChangeValue} 
          error={handleError.indexOf('password') !== -1 } 
          inputLabel="password" formType="password"
          isLoading={isLoading}
        />
      </CInput>
      <FormBtn 
        isClick={() => validationValue(handleRequest)}
        isLoading={isLoading}
        title="Create"
      />
      <div className={`${requestError ? 'text-red-400' : 'opacity-0 invisible'}`}>Somethings went wrong. Please try again</div>
    </div>
  );
}
 
export default MainForm;