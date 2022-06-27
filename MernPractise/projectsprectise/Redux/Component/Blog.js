import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Blog() {
    const param = useParams()
    console.log('param', param)
    const [data, setdata] = useState('')
    useEffect(async()=>{
      const result = await axios.get(`https://jsonplaceholder.typicode.com/comments/${param.id}`)
      setdata(result.data)
    },[])
  return (
    <>
      {data && <><h1>
        {data?.name}
      </h1>
      <h3>
        {data?.email}
      </h3>
      <h4>
        {data?.id}
      </h4>
      <h5>
        {data?.body}
      </h5></>}
      {!data && <h1>No data available</h1>}
    </>
  )
}

export default Blog