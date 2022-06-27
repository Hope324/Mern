import React,{useState, useEffect} from 'react'
import Ncards from './ncards'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function Data() {

    const history=useHistory()  
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
        console.log('result part',data2)
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
           
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100vh', width: '100vw', overflow: 'auto' }}>

                {data &&
                    data.map((element, index) => {
                        return (
                            <div key={element.id} onClick={()=>{history.push(`showdata/${element.id}`)}}>
                                {element.id < 10 && <Ncards title={element.name} description={element.body} id={element.id} />}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Data
