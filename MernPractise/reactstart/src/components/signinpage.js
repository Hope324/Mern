import React from 'react'
import axios from 'axios'


function Signinpage() {
    const [userData,setUserData]=React.useState({})

  return (

    <>
    <label>username</label>
 <input type='text' value={userData.userName} onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>

 <label>username</label>
 <input type='password' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />

 <button onClick={sendData}>submit</button>
    </>
  )
}

export default Signinpage