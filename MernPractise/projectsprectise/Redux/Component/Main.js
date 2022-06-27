import { useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import {Flight} from '../Contexts/FlightContext'
import {useSelector} from 'react-redux'
function Main(){
    const [count, setCount] = useState(0)
    // const {name} = useParams()
    // const {name:contextName} = useContext(Flight)
    const state = useSelector((state)=>state)    
    console.log('redux state',state)
    let a = 0
    const [password, setPassword] = useState('')
    const handleClick = ()=>{
        setCount(count+1) 
    }
    const notice = 'use state when chnaging value dynamically'
    // console.log(name,notice,contextName)
    return(
        <div>
            <h1>{notice}</h1>
            {/* <h1>{name}</h1>
            <h1>{contextName}</h1> */}
            <h1>{state.name}</h1>
            <h3 id='divNumberHolder'>{count}</h3>
            <button onClick={()=>{handleClick()}}>click me</button>
        </div>
    )
}
export default Main

// when defining component use PascalCasing
// variable name in camelCasing

// react cannot understand normal variable change
//react can only understand state variable
