import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Showdata() {
    const {id}=useParams();
    const[data,setData]=useState({})
    useEffect( async()=> {
     const result= await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
     setData(result.data);
    },[])

    //console.log(id)
  return (
<>
<h1>{data?.name}</h1>
<h3>{data?.body}</h3>
<h2>{}</h2>
</>
    

  )
}

export default Showdata