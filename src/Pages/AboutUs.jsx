import React from 'react'
import Banner from '../components/UI/Banner'
// import Banner from '../components/UI/Banner'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
      const Navigate=useNavigate()
  return (
    <>
    
    <div>
      <Banner title="about"  subtitle="it's a about page" description="lovely about page"/>
    </div>
{/* <br /> */}
      {/* <button className='rounded-full bg-slate-900 text-slate-400 px-2 text-3xl' onClick={()=>{
          Navigate(-1)
        }}> &lt; Go Back</button> */}

        </>
  )
}
