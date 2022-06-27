import {React,useState} from 'react'
import axios from 'axios'

function Signuppage() {
const [userData,setUserData]=useState({})
const sendData=async()=>{
    const response=await axios.post('http://localhost:2000/grocery/add',userData)
    console.log(response)
}

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

export default Signuppage