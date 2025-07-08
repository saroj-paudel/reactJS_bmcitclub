import React from 'react'

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
  return (
    <div>
      {title} <br />
      {subtitle} <br />
      {description} <br />
    </div>
  )
}

export default Banner
