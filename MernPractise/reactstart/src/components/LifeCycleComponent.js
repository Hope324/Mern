
//1.Use of LifeCycleComponent

// import { useState,useEffect } from "react"

//  function LifeCycleComponent()
// {
//     const[value,setValue]=useState('')
//     useEffect(()=>{
//         //setValue('Welcome to my class')
//         setTimeout(()=>{setValue('Welcome to my class')},1000)
//     },[])
//     return(
//         //with click event
//         // <div>
//         //     <h4>Value Updated:-{value}</h4>
//         //     <button onClick={()=>{setValue('welcome to my app')}}>click me</button>
//         // </div>

//         //without click
//         <div>
//  <h4>Value Updated:-{value}</h4>
//         </div>
        
//     )
// }

// export default LifeCycleComponent;


//2.Use of UseContext

import { useState, useEffect, useRef, useContext } from "react"
//import abc ,{value as val} from '../commenFunction'
import { Flight } from "../context/Flightcontext";
import {useHistory} from 'react-router-dom'
import {shareName} from '../Redux/Action'
import { useDispatch } from "react-redux";

export default function LifeCycleComponent(props){
    
    const history = useHistory()
    const dispatch =useDispatch()
    const {name,updateName} = useContext(Flight)
    const [pvalue,setPvalue] = useState(0)
    const [nvalue,setNvalue] = useState(0)
    //const [state1, setState1] = useState(0)   
    const [inputValue, setInputValue] = useState('') 
    const InputRef = useRef(null)
    const handleClick = ()=>{
        setPvalue(pvalue+1)
    }
    const handleChange = ()=>{
        // const element = document.getElementById('h4LifeCycle')
        // element.value = 'hello'
        // console.log(element)
        if(InputRef.current){
            // InputRef.current.value = 'hello'
            // console.log(InputRef.current)
        }
    }
    //useEffect(callback function, optional(array))
    //useEffect(callback function, [])   =>  componentDidMount  phase it comes up only once when component loaded
    //useEffect(callbackback) ==> when ever there is a change in (anystate)compoent function will run
    // useEffect(callback function, [state])  ==> when ever a change in this particular state the callback function
    return(
        <div style={{marginTop:'300px'}} onChange={handleChange} id='h4LifeCycle' ref={InputRef}>
            <input type='text' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
            <br/>
            <button onClick={()=>{updateName(inputValue);dispatch(shareName(inputValue))}} >share name</button>
            <h4>value updated:- {pvalue}</h4>
            <button onClick={handleClick}>click me</button>
            <h4>value updated:- {nvalue}</h4>
            <button onClick={()=>{setNvalue(nvalue-1)}}>click me</button>
        </div>
    )
}

// when component mount ---- when component unmount --- on user action
// componentDidMount ----   componentWillUnmount   --- componentDidUpdate(whenever component refresh)
// useEffect will run the callback function at particular moment on the lifecycle of whole component

//setTimeout(()=>{setValue('welcome to automated react app');console.log('inside settimeout')},4000)}
