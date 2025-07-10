import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Cards({title,desc,image}) {
    const navigate= useNavigate()
  return (
    <div>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white hover:-translate-y-2 transition-all ease-in-out duration-300">
  <img className="w-full h-60 object-cover" src={image} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-black">{title}</div>
    <p className="text-gray-700 text-base line-clamp-3">
      {desc}
    </p>
    <button className='border border-blue-400 w-fit h-fit px-10 py-2 rounded-md text-blue-400 mt-5 hover:text-white hover:bg-blue-500 cursor-pointer ' onClick={
      ()=>  navigate(`/card/${title}`)
    }>Read more</button>
  </div>
</div>
    </div>
  )
}

export default Cards
