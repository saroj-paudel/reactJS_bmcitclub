import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'
import GetData from '../../HOC/Custome/GetRequest/GetData'
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


// const cards = [
//   {
//     title:"Card 1",
//     desc:"A dummy text generator is a tool used to create placeholder text for design and development purposes. This text is often used in web design, graphic design, and publishing to demonstrate the visual form of a document without relying on meaningful content",
//     img:"https://v1.tailwindcss.com/img/card-top.jpg"
//   },
//   {
//     title:"Card 2",
//     desc:"A dummy text generator is a tool used to create placeholder text for design and development purposes. This text is often used in web design, graphic design, and publishing to demonstrate the visual form of a document without relying on meaningful content",
//     img:"https://imgs.search.brave.com/lmtAwzSRiQ_tZ2UVPwAULaq_hot6l_PybwoVaKUmD9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9rZnR6d2R5/YXV3dDkvNVZWQnhE/V2hzNkNwNlJFaWZZ/bmxvUy84MWMwMmI1/ZDczZGI1ZGM4NTM2/NWUxNWZlYjNiNThl/NC9BbmFzdHJvbmF1/dHJpZGluZ2Fob3Jz/ZWluYXBob3RvcmVh/bGlzdGljc3R5bGU5/LmpwZz93PTM4NDAm/cT05MCZmbT13ZWJw"
//   },
//   {
//     title:"Card 3",
//     desc:"A dummy text generator is a tool used to create placeholder text for design and development purposes. This text is often used in web design, graphic design, and publishing to demonstrate the visual form of a document without relying on meaningful content",
//     img:"https://imgs.search.brave.com/hevyd1LkViEXmfv6m4CXj-NHvTzIJI8tPwx8Hyj5J78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaWxob3VldHRl/LW9mLWEtZ3V5LXdp/dGgtYS1jYXAtYXQt/cmVkLXNreS1zdW5z/ZXQtZnJlZS1pbWFn/ZS5qcGVnP3c9NjAw/JnF1YWxpdHk9ODA"
//   }
// ]

const data = GetData('services')



  return (
    <div className='bg-red-500 h-screen'>
      <div className="h-full">
        <img src={imgList[curr]} alt="" className='h-full w-full object-cover'/>
        {/* <div className="absolute top-0 left-0 right-0 bg-black/30 z-10 h-full justify-center flex items-center flex-col text-white"> */}
        {/* <div>Welcome to {title}</div>
        <div>{subtitle}</div> */}
<div className='grid grid-cols-3 gap-6 w-10/12 mx-auto mt-10 '>

{
  data.map((val,i)=>{
    return <Cards title={val.title} desc={val.summary} image={val?.coverImage?.url} key={i} />
  })
}
  </div>


        {/* </div> */}
        
        <div className='hidden'>

          {
            setTimeout(() => {
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
