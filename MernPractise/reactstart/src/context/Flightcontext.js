import React, { useState } from 'react'
import propspractise from '../components/propspractise'
export const Flight=React.createContext(null)
function Flightcontext(props) {
    const[name,setName]=React.useState(null)
  return (
    <>
    <Flight.Provider value={{name,updateName:(val)=>{setName(val)}}}>
        <propspractise /> 
    </Flight.Provider>
    </>
  )
}

export default Flightcontext