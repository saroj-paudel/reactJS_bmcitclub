import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function GetData(url) {

    const [data,setData] =useState([])

const getData=()=>{
  try{
    axios.get(`https://gastro-backend.e-aribt.com/api/${url}`).then(res=>{
      // console.log(res.data.data);
      setData([...res.data.data])
      
    }).catch(err=>{
      console.log(err);
      
    })
  }catch(error){
console.log(error);

  }
}

useEffect(()=>{
getData()
},[])


  return data
}

export default GetData
