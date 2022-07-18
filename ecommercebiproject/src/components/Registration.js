import React, { useState } from 'react'
import axios from 'axios'
function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const adduser = () => {

        axios.post('http://localhost:2002/api/e2/register/add', {
          name:name,
          email:email,
          password:password,
          isadmin:"0"

        })
          .then(function (response) {
              alert('data added succesfully')

              setName('')
              setEmail('')
              setPassword('')
       
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            alert('data not added')
          })
        // setItems((olditems) => {
        //   return [...olditems, inputlist]
        // })
        // setInputList('');
      }
    return (
        <>
        <div style={{height:'37.59rem',backgroundImage: "url(https://wallpapercave.com/wp/wp9764105.jpg)"
              ,backgroundSize:'Cover',
              backgroundRepeat:'no-repeat',overflow:'hidden'}}>

        
            <div className='row justify-content-center mx-4' >
                <div className='col-md-5 mt-5 shadow-lg bg-white rounded'>
                    <h2 className='h-2 text-center m-2'>Register</h2>
                    <div className='my-3 m-2'>
                        <input required type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
                        <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input required type="password" placeholder='password' className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                        <button className='btn btn-danger mt-3' onClick={adduser}>REGISTER</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Registration