import React, { useState } from 'react'
import Banner from '../components/UI/Banner'
// import Banner from '../components/UI/Banner'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { Formik , Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
  user:yup.string().min(4,"minimum 4 is reqrd!").max(8,"max 8 allowed").required("Errrrrrrrrrrr!")
})

export default function AboutUs() {
      const Navigate=useNavigate()
      const submitted = ()=>{
        if(username.trim().length<=0){
          alert("No Data!")
        }else{
          alert("No Data")
        }
      }

      const [username,setusername]=useState()
  return (
    <>
    
    <div className='mt-44 w-10/12 mx-auto'>
      <div className='flex flex-col gap-4'>
        <input type="text" placeholder='Enter your name' className='border py-3 px-4 placeholder:capitalize rounded-md' onChange={(e)=>{
          setusername(e.target.value)
        }}/>
        <button className='group w-fit h-fit border-2 bg-transparent px-10 py-4  transition-all rounded-full cursor-pointer hover:text-white hover:bg-black duration-600 ' onClick={()=>{
          submitted()
          }}>Submit <FaArrowRight className='inline group-hover:rotate-90 transition-all'/></button>
      </div>
      </div>

<div className='mt-30 px-30'>

      {/* {FOrmik } */}
<Formik
initialValues={
  {
    user:""
  }
}

onSubmit={(values)=>{
  console.log(values);
  
}}
validationSchema={schema}
>
  {({handleSubmit})=>{
    return <Form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <Field name="user" placeholder='enter user' className='border py-3 px-4 rounded-md ml-20'></Field>
        <ErrorMessage name='user' component={'div'} className='text-red-600  font-bold'></ErrorMessage>
      </div>
      <button type='submit' className='border-2 rounded-full px-3 py-2 cursor-pointer'>Submit</button>
    </Form>
  }}
</Formik>
      </div>
        </>
  )
}
