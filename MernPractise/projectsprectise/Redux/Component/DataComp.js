import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Card from './Card'
import axios from 'axios'

function DataComp() {
    const history = useHistory()
    const [data, setData] = useState([])
    let data2 
    // one way to handle promise and fetch data
    const callData = ()=>{
      let result = []
      axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{result=res;console.log(result)}).catch((error)=>{console.log('catch block',error)})
    }
    // second way to handle promise
    const callData2 = async()=>{
      try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setData(result.data)
        data2=result.data
      }
      catch(err){
        console.log('inside catch', err)
      }
    }
    useEffect(()=>{
      callData2()
    },[])
    return (
        <>
            <button onClick={callData2}>call data</button>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100vh', width: '100vw', overflow: 'auto' }}>

                {data?.map((element, index) => {
                        return (
                            <span key={element.id} onClick={()=>{history.push(`blog/${element.id}`)}}>
                                {element.id < 10 && <Card title={element.name} description={element.body} id={element.id} />}
                            </span>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DataComp