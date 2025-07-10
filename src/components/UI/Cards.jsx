import React from 'react'

function Cards({title,desc,image}) {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full h-60 object-cover" src={image} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-black">{title}</div>
    <p className="text-gray-700 text-base line-clamp-3">
      {desc}
    </p>
  </div>
</div>
    </div>
  )
}

export default Cards
