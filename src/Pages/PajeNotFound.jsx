import React, { useState } from 'react'

function PajeNotFound() {
    let a=10;
    // let b=400;
    const changed=()=>{
        alert(404)
        a=a+1

    }
    const [showBtn,setshowBtn] = useState(false)

    const showBox = ()=>{
        if (showBtn) {
            
            return <div className='shadow-2xl py-10 px-10'>Here</div>
        }
    }

    const [b,setb]=useState("saroj")
  return (
    <div className='text-5xl '>
      {/* {a} <br /> */}
      {/* {b} */}
      {/* {console.log(a)
      } */}
<br />
      {/* <button onClick={()=> changed()}>Change Date</button> <br /> */}
      {/* <button onClick={()=> setb("Saroj Don!")}>Change B</button> */}
      <button onClick={()=> setshowBtn(!showBtn)}>404</button>
       {/* {showBox()} */}
       {
        showBtn?<div>here</div>:null
       }

    </div>
  )
}

export default PajeNotFound
