import React from 'react'
export const Flight = React.createContext(null)
function FlightContext(props) {
    const [name,setName] = React.useState('');
  return (
    <Flight.Provider value={{name, updateName:(val)=>{setName(val)}}}>
        {props.children}
    </Flight.Provider>
  )
}

export default FlightContext