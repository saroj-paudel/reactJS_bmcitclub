import React from 'react'
import Banner from '../components/UI/Banner'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const Navigate=useNavigate()
  return (
    <div>
     <Banner title="home" subtitle="it's a home page"  description="lovely Home page"/> <br />
     {/* <button className='rounded-full bg-slate-900 text-slate-400 px-2' onClick={()=>{
     Navigate('/about')
     }}>About US</button> */}
    </div>
  )
}

