import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Login, setLogin] = useState([]);
  const navigate = useNavigate();
  const getuser = () => {
    axios.get(`http://localhost:2002/api/e2/login/get`)
      .then(function (response) {
        setLogin(response.data)
        // const username = response.data[0].email;
        // const passwordentered = response.data[0].password;
        // const isadmin=response.data[0].admin;
        const newvalues=response.data.filter(function(item){
          return item.email==email && item.password==password
        })
        console.log(newvalues)
        
        if (newvalues[0].email === email && newvalues[0].password === password) {
             if(newvalues[0].isadmin=="0")
             {
              navigate('/')
             }
             else
             {
              navigate('/Adminlist')
             }
        }
        else
        {
            alert('login not successfull')
        }
        
        console.log(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <>
      <>
        <div style={{
          height: '37.59rem', backgroundImage: "url(https://wallpapercave.com/wp/wp9764093.jpg)"
          , backgroundSize: 'Cover',
          backgroundRepeat: 'no-repeat', overflow: 'hidden'
        }}>


          <div className='row justify-content-center mt-5' >
            <div className='col-md-5 mt-5 shadow-lg bg-white rounded'>
              <h2 className='h-2 text-center m-2'>Login</h2>
              <div className='my-3 m-2'>

                <input type="text" placeholder='email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder='password' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <button className='btn btn-danger mt-3' onClick={getuser}>LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Login