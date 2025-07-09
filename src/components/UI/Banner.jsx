import React from 'react'
import { useLocation } from 'react-router-dom'

// function Banner(props) {
//   return (
//     <div>
//       {props.title} <br />
//       {props.subtitle} <br />
//       {props.description} <br />
//     </div>
//   )
// }

function Banner({title,subtitle,description}) {
    // const location = useLocation()
    // console.log(location);
    
  return (
    <div className='bg-red-500 h-screen'>
      <div className="h-full">
        <img src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover'/>
        <div className="absolute top-0 left-0 right-0 bg-black/30 z-10 h-full justify-center flex items-center flex-col text-white">
        <div>Welcome to {title}</div>
        <div>{subtitle}</div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
