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
    const location = useLocation()
    console.log(location);
    
  return (
    <div>
        {location.pathname} <br />
        <hr />
      <p className='text-xl text-blue-600 '>{title}</p> <br />
      {subtitle} <br />
      {description} <br />
    </div>
  )
}

export default Banner
