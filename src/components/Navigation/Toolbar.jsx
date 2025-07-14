import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

function Toolbar() {
  const location = useLocation()

  const nav_items=[
    {title:"home",path:'/'},
    {title:"about",path:'/about'},
    {title:"contact",path:'/contact'},
    {title:"blog",path:'/blog'},
    {title:"events",path:'/events'},

  ]


  return (
    <div className='flex justify-between px-10 py-4 shadow-2xl bg-blue-500 fixed top-10 left-0 w-11/12 right-0 mx-auto rounded-full z-15'>
      <div className='font-bold text-xl text-white'>Training</div>
      <div className='flex gap-6'>
        {
          nav_items.map((val,i)=>{
            return <div className='relative '>
              <Link key={i} to={val.path} className={`${location.pathname==val.path?"text-white":"text-white/80"}`}>{val.title.toUpperCase()}</Link> 
              {/* {

              location.pathname==val.path?<div className="h-px bg-white"></div>:null
              } */}

              <div className={`h-px bg-white ${location.pathname==val.path?"w-full":"w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>
            </div>
          })
        }
        <IoMenu className='text-white text-3xl'/>
      </div>
    </div>
  )
}

export default Toolbar
