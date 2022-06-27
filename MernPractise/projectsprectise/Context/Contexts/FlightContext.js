import React from 'react'
export const Flight = React.createContext(null)
function FlightContext(props) {
    const [name,setName] = React.useState({});
    const [employee, setEmployee] = React.useState(
        {
            name: 'deepak',
            age: 26
        }
    )
  return (
    <Flight.Provider value={{name, updateName:(val)=>{setEmployee({...employee,...val})}}}>
        {props.children}
    </Flight.Provider>
  )
}

export default FlightContext