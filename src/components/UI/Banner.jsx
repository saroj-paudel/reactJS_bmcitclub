import React, { useState } from 'react'
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
    
const imgList=[
  "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502790671504-542ad42d5189?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

var [curr,setcurr] = useState(0)

  return (
    <div className='bg-red-500 h-screen'>
      <div className="h-full">
        <img src={imgList[curr]} alt="" className='h-full w-full object-cover'/>
        <div className="absolute top-0 left-0 right-0 bg-black/30 z-10 h-full justify-center flex items-center flex-col text-white">
        <div>Welcome to {title}</div>
        <div>{subtitle}</div>
        </div>
        
        <div className='hidden'>

          {
            setInterval(() => {
              if (curr >= (imgList.length - 1))
                curr=0
              else
              curr+=1
            setcurr((curr))
          }, 5000)
        }
        </div>

      </div>
    </div>

    

  )
}

export default Banner
